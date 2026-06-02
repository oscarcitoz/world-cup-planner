(function () {
  const trip = window.WORLD_CUP_TRIP;
  const monthIndex = { jun: 5, jul: 6 };
  const today = startOfDay(new Date());
  const enrichedDays = trip.days.map((day, index) => ({
    ...day,
    index,
    dateObj: parseDayDate(day)
  }));

  const state = {
    dayId: getInitialDay().id,
    filter: "all",
    view: "agenda"
  };

  const labels = {
    all: "Todo",
    arrival: "Llegada",
    transport: "Traslado",
    city: "Ciudad",
    food: "Comida",
    match: "Partido"
  };

  const viewLabels = {
    agenda: "Agenda",
    food: "Comidas",
    ai: "IA"
  };

  const icon = {
    all: '<svg viewBox="0 0 24 24"><path d="M5 7h14M5 12h14M5 17h14"/></svg>',
    arrival: '<svg viewBox="0 0 24 24"><path d="M4 16l16-5-16-5 3 5-3 5zM8 12h11"/></svg>',
    transport: '<svg viewBox="0 0 24 24"><path d="M7 17h10M8 17l1-10h6l1 10M6 11h12M9 20h.01M15 20h.01"/></svg>',
    city: '<svg viewBox="0 0 24 24"><path d="M4 21V9l5-3 5 3 6-4v16M9 21V6M14 21V9M4 13h20"/></svg>',
    food: '<svg viewBox="0 0 24 24"><path d="M7 3v8M11 3v8M7 7h4M17 3v18M14 7c0 3 3 4 3 4"/></svg>',
    match: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 3v18M4.8 8h14.4M4.8 16h14.4"/></svg>'
  };

  const el = {
    stats: document.querySelector("#stats"),
    todayPanel: document.querySelector("#todayPanel"),
    calendarGrid: document.querySelector("#calendarGrid"),
    dayList: document.querySelector("#dayList"),
    daySummary: document.querySelector("#daySummary"),
    title: document.querySelector("#selectedDayTitle"),
    prevDay: document.querySelector("#prevDay"),
    nextDay: document.querySelector("#nextDay"),
    viewTabs: document.querySelector("#viewTabs"),
    filters: document.querySelector("#planFilters"),
    detailView: document.querySelector("#detailView"),
    foodBoard: document.querySelector("#foodBoard"),
    sectorGrid: document.querySelector("#sectorGrid"),
    modal: document.querySelector("#detailModal"),
    modalContent: document.querySelector("#modalContent"),
    closeModal: document.querySelector("#closeModal")
  };

  function parseDayDate(day) {
    const [month, date] = day.id.split("-");
    return new Date(2026, monthIndex[month], Number(date));
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function daysBetween(a, b) {
    return Math.round((startOfDay(a) - startOfDay(b)) / 86400000);
  }

  function getInitialDay() {
    const match = enrichedDays.find((day) => sameDay(day.dateObj, today));
    if (match) return match;
    if (today < enrichedDays[0].dateObj) return enrichedDays[0];
    if (today > enrichedDays.at(-1).dateObj) return enrichedDays.at(-1);
    return enrichedDays.find((day) => day.dateObj > today) || enrichedDays[0];
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function selectedDay() {
    return enrichedDays.find((day) => day.id === state.dayId) || enrichedDays[0];
  }

  function allPlans() {
    return enrichedDays.flatMap((day) => day.plans.map((plan) => ({ ...plan, day })));
  }

  function zones() {
    return [...new Set(enrichedDays.map((day) => day.sector))];
  }

  function maps(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function formatCalendarDate(date) {
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
  }

  function formatCalendarDateTime(date) {
    return `${formatCalendarDate(date)}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
  }

  function parsePlanDate(day, time) {
    const match = String(time).match(/(\d{1,2}):(\d{2})/);
    const date = new Date(day.dateObj);
    if (!match) {
      date.setHours(10, 0, 0, 0);
      return date;
    }
    date.setHours(Number(match[1]), Number(match[2]), 0, 0);
    return date;
  }

  function durationMinutes(duration) {
    const text = String(duration).toLowerCase();
    const hours = text.match(/(\d+(?:\.\d+)?)\s*h/);
    const minutes = text.match(/(\d+)\s*min/);
    const total = (hours ? Number(hours[1]) * 60 : 0) + (minutes ? Number(minutes[1]) : 0);
    if (total) return total;
    if (text.includes("viaje")) return 180;
    if (text.includes("flexible")) return 120;
    return 90;
  }

  function calendarUrl({ title, start, end, details, location, allDay = false }) {
    const dates = allDay
      ? `${formatCalendarDate(start)}/${formatCalendarDate(end)}`
      : `${formatCalendarDateTime(start)}/${formatCalendarDateTime(end)}`;
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      dates,
      details,
      location,
      ctz: "America/New_York"
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  function dayCalendarUrl(day) {
    const end = new Date(day.dateObj);
    end.setDate(end.getDate() + 1);
    const details = day.plans.map((plan) => `${plan.time} - ${plan.title} (${plan.place})`).join("\n");
    return calendarUrl({
      title: `${day.date}: ${day.title}`,
      start: day.dateObj,
      end,
      details: `${day.summary}\n\nAgenda:\n${details}`,
      location: day.sector,
      allDay: true
    });
  }

  function planCalendarUrl(day, plan) {
    const start = parsePlanDate(day, plan.time);
    const end = new Date(start.getTime() + durationMinutes(plan.duration) * 60000);
    return calendarUrl({
      title: `${plan.title} - ${trip.name}`,
      start,
      end,
      details: `${plan.description}\n\nTips:\n${plan.tips.join("\n")}`,
      location: plan.place
    });
  }

  function dayKind(day) {
    if (day.plans.some((plan) => plan.type === "match")) return "match";
    if (day.plans.some((plan) => plan.type === "arrival")) return "flight";
    if (/outlet|mall|compras/i.test(day.title)) return "shopping";
    if (/key west|playa|beach/i.test(`${day.title} ${day.sector}`)) return "beach";
    if (/cumple/i.test(day.title)) return "birthday";
    if (day.plans.some((plan) => plan.type === "transport")) return "road";
    return "city";
  }

  function dayIcon(day) {
    const icons = {
      match: "🔥",
      flight: "✈",
      shopping: "🛍",
      beach: "🌴",
      birthday: "★",
      road: "↗",
      city: "◇"
    };
    return icons[dayKind(day)];
  }

  function dayMood(day) {
    const mood = {
      match: "Dia grande: partido y energia alta",
      flight: "Dia de aeropuerto y traslados",
      shopping: "Dia de compras y carro",
      beach: "Dia de sol, ruta larga o playa",
      birthday: "Celebracion y plan especial",
      road: "Moverse con margen",
      city: "Caminar, comer y explorar"
    };
    return mood[dayKind(day)];
  }

  function dateLabel(date) {
    return new Intl.DateTimeFormat("es-CO", {
      weekday: "long",
      day: "numeric",
      month: "long"
    }).format(date);
  }

  function selectDay(dayId, options = {}) {
    state.dayId = dayId;
    state.filter = "all";
    render();
    if (options.scroll) {
      document.querySelector("#cronograma").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderStats() {
    const first = enrichedDays[0].dateObj;
    const last = enrichedDays.at(-1).dateObj;
    const all = allPlans();
    const foodCount = enrichedDays.reduce((sum, day) => sum + day.food.length, 0);
    const daysLeft = Math.max(0, daysBetween(first, today));
    const tripDays = daysBetween(last, first) + 1;
    const items = [
      { value: enrichedDays.length, label: "dias de viaje" },
      { value: all.length, label: "bloques de agenda" },
      { value: foodCount, label: "recomendaciones" },
      { value: daysLeft || tripDays, label: daysLeft ? "dias para salir" : "dias de ruta" }
    ];

    el.stats.innerHTML = items
      .map((item) => `<article class="stat"><strong>${item.value}</strong><span>${item.label}</span></article>`)
      .join("");
  }

  function renderTodayPanel() {
    const first = enrichedDays[0];
    const last = enrichedDays.at(-1);
    const active = selectedDay();
    const todayDay = enrichedDays.find((day) => sameDay(day.dateObj, today));
    const beforeTrip = today < first.dateObj;
    const afterTrip = today > last.dateObj;
    const statusDay = todayDay || (beforeTrip ? first : last);
    const nextPlan = statusDay.plans[0];
    const totalSpan = Math.max(1, daysBetween(last.dateObj, first.dateObj));
    const progressRaw = daysBetween(today, first.dateObj) / totalSpan;
    const progress = Math.max(0, Math.min(100, Math.round(progressRaw * 100)));
    const headline = beforeTrip
      ? `Faltan ${daysBetween(first.dateObj, today)} dias`
      : afterTrip
        ? "Viaje completado"
        : "Hoy en el viaje";
    const copy = beforeTrip
      ? `El primer bloque sera ${first.date}: ${nextPlan.title}.`
      : afterTrip
        ? `La ruta cerro el ${last.date}.`
        : `${statusDay.date}: ${statusDay.title}.`;

    el.todayPanel.innerHTML = `
      <div class="today-card__main">
        <p class="kicker">Que toca hoy</p>
        <h2>${headline}</h2>
        <p>${copy}</p>
        <div class="progress" aria-label="Progreso del viaje">
          <span style="width: ${progress}%"></span>
        </div>
        <div class="today-card__actions">
          <button class="button button--dark" data-jump-day="${statusDay.id}">Ver dia clave</button>
          <a class="button button--light" href="#calendario">Abrir calendario</a>
        </div>
      </div>
      <div class="next-plan">
        <span>${dayIcon(statusDay)} ${statusDay.date}</span>
        <strong>${nextPlan.time} - ${nextPlan.title}</strong>
        <p>${statusDay.sector}</p>
      </div>
      <div class="mini-route">
        <span>${dayIcon(active)} Seleccion actual</span>
        <strong>${active.date}</strong>
        <p>${active.title}</p>
      </div>
    `;

    el.todayPanel.querySelector("[data-jump-day]").addEventListener("click", (event) => {
      selectDay(event.currentTarget.dataset.jumpDay, { scroll: true });
    });
  }

  function renderCalendar() {
    el.calendarGrid.innerHTML = [5, 6].map(renderMonth).join("");
    el.calendarGrid.querySelectorAll("[data-day]").forEach((button) => {
      button.addEventListener("click", () => selectDay(button.dataset.day, { scroll: true }));
    });
  }

  function renderMonth(month) {
    const monthDate = new Date(2026, month, 1);
    const title = new Intl.DateTimeFormat("es-CO", { month: "long", year: "numeric" }).format(monthDate);
    const daysInMonth = new Date(2026, month + 1, 0).getDate();
    const mondayOffset = (new Date(2026, month, 1).getDay() + 6) % 7;
    const cells = [];

    for (let i = 0; i < mondayOffset; i += 1) {
      cells.push('<span class="calendar-empty"></span>');
    }

    for (let dayNum = 1; dayNum <= daysInMonth; dayNum += 1) {
      const date = new Date(2026, month, dayNum);
      const tripDay = enrichedDays.find((day) => sameDay(day.dateObj, date));
      const isSelected = tripDay && tripDay.id === state.dayId;
      const isToday = sameDay(date, today);
      const className = [
        "calendar-day",
        tripDay ? "has-plan" : "",
        tripDay ? `day-${dayKind(tripDay)}` : "",
        isSelected ? "is-selected" : "",
        isToday ? "is-today" : ""
      ]
        .filter(Boolean)
        .join(" ");
      const label = tripDay
        ? `<span class="calendar-number">${dayNum}</span><span class="calendar-marker">${dayIcon(tripDay)}</span><small>${tripDay.title}</small>`
        : `${dayNum}`;
      const attrs = tripDay ? `button data-day="${tripDay.id}"` : "span";
      cells.push(`<${attrs} class="${className}">${label}</${tripDay ? "button" : "span"}>`);
    }

    return `
      <article class="month-card">
        <h3>${title}</h3>
        <div class="weekdays"><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span></div>
        <div class="month-grid">${cells.join("")}</div>
      </article>
    `;
  }

  function renderDays() {
    el.dayList.innerHTML = enrichedDays
      .map(
        (day, index) => `
          <button class="day-button" data-day="${day.id}" aria-selected="${day.id === state.dayId}" role="tab">
            <span class="day-button__index">${index + 1}</span>
            <span>
              <strong>${day.date}</strong>
              <small>${day.sector}</small>
            </span>
            <em>${day.plans.length}</em>
          </button>
        `
      )
      .join("");

    el.dayList.querySelectorAll(".day-button").forEach((button) => {
      button.addEventListener("click", () => selectDay(button.dataset.day));
    });
  }

  function renderDaySummary() {
    const day = selectedDay();
    const food = day.food[0];
    el.daySummary.innerHTML = `
      <div>
        <p class="kicker">${dateLabel(day.dateObj)}</p>
        <h2><span class="day-hero-icon">${dayIcon(day)}</span>${day.title}</h2>
        <p>${day.summary}</p>
        <div class="boarding-row">
          <span>${dayMood(day)}</span>
          <a class="small-button calendar-action" href="${dayCalendarUrl(day)}" target="_blank" rel="noreferrer">Agregar dia a Google Calendar</a>
        </div>
      </div>
      <div class="day-facts">
        <span><strong>${day.sector}</strong>Sector</span>
        <span><strong>${day.tempo}</strong>Ritmo</span>
        <span><strong>${food ? food.recommendation.split(".")[0] : "Por definir"}</strong>Comida sugerida</span>
      </div>
    `;
  }

  function renderHeader() {
    const day = selectedDay();
    el.title.textContent = `${day.date}: ${day.title}`;
    el.prevDay.disabled = day.index === 0;
    el.nextDay.disabled = day.index === enrichedDays.length - 1;
  }

  function renderViewTabs() {
    el.viewTabs.innerHTML = Object.entries(viewLabels)
      .map(
        ([view, label]) => `
          <button class="view-tab ${state.view === view ? "is-active" : ""}" data-view="${view}" role="tab" aria-selected="${state.view === view}">
            ${label}
          </button>
        `
      )
      .join("");

    el.viewTabs.querySelectorAll("[data-view]").forEach((button) => {
      button.addEventListener("click", () => {
        state.view = button.dataset.view;
        renderDetailView();
        renderViewTabs();
      });
    });
  }

  function renderFilters() {
    if (state.view !== "agenda") {
      el.filters.innerHTML = "";
      return;
    }

    const day = selectedDay();
    const types = ["all", ...new Set(day.plans.map((plan) => plan.type))];
    el.filters.innerHTML = types
      .map(
        (type) => `
          <button class="chip ${type === state.filter ? "is-active" : ""}" data-filter="${type}">
            ${icon[type]}<span>${labels[type]}</span>
          </button>
        `
      )
      .join("");

    el.filters.querySelectorAll(".chip").forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.filter;
        renderFilters();
        renderDetailView();
      });
    });
  }

  function renderDetailView() {
    renderFilters();
    if (state.view === "agenda") renderTimeline();
    if (state.view === "food") renderSelectedFood();
    if (state.view === "ai") renderAiNotes();
  }

  function renderTimeline() {
    const day = selectedDay();
    const items = day.plans.filter((plan) => state.filter === "all" || plan.type === state.filter);

    if (!items.length) {
      el.detailView.innerHTML = '<p class="empty">No hay planes para este filtro.</p>';
      return;
    }

    el.detailView.innerHTML = `
      <div class="timeline">
        ${items
          .map(
            (item, index) => `
              <article class="timeline-item">
                <time>${item.time}</time>
                <span class="timeline-item__rail" aria-hidden="true"></span>
                <div class="plan-card">
                  <div class="plan-card__top">
                    <h3>${item.title}</h3>
                    <span class="badge">${labels[item.type]}</span>
                  </div>
                  <p>${item.description}</p>
                  <div class="meta">
                    <span>${item.place}</span>
                    <span>${item.duration}</span>
                  </div>
                  <div class="actions">
                    <button class="small-button" data-detail="${index}">Detalle</button>
                    <a class="small-button" href="${maps(item.mapQuery || item.place)}" target="_blank" rel="noreferrer">Mapa</a>
                    <a class="small-button calendar-action" href="${planCalendarUrl(day, item)}" target="_blank" rel="noreferrer">Google Calendar</a>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;

    el.detailView.querySelectorAll("[data-detail]").forEach((button) => {
      button.addEventListener("click", () => openDetail(items[Number(button.dataset.detail)], day));
    });
  }

  function renderSelectedFood() {
    const day = selectedDay();
    el.detailView.innerHTML = `
      <div class="selected-food">
        ${day.food
          .map(
            (food) => `
              <article class="food-card food-card--large">
                <p class="kicker">${food.moment} / ${food.style}</p>
                <h3>${food.recommendation}</h3>
                <p>${food.reason}</p>
                <div class="meta"><span>${food.sector}</span></div>
                <a class="small-button" href="${maps(food.mapQuery)}" target="_blank" rel="noreferrer">Buscar en mapa</a>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderAiNotes() {
    const day = selectedDay();
    const notes = buildAiNotes(day);
    el.detailView.innerHTML = `
      <div class="ai-panel">
        <article class="ai-brief">
          <p class="kicker">Lectura IA del dia</p>
          <h3>${notes.brief}</h3>
          <p>${notes.context}</p>
        </article>
        <div class="ai-grid">
          ${notes.cards
            .map(
              (card) => `
                <article class="ai-card">
                  <span>${card.label}</span>
                  <h3>${card.title}</h3>
                  <p>${card.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function buildAiNotes(day) {
    const hasMatch = day.plans.some((plan) => plan.type === "match");
    const hasTransport = day.plans.some((plan) => plan.type === "transport");
    const hasFood = day.food.length > 0;
    const firstFood = day.food[0];
    const lastPlan = day.plans.at(-1);

    return {
      brief: hasMatch
        ? "Dia de partido: la clave no es llenar la agenda, es llegar temprano."
        : hasTransport
          ? "Dia con movilidad sensible: el margen vale mas que otro plan extra."
          : "Dia caminable: agrupa planes por zona y deja aire entre bloques.",
      context: `${day.date} se mueve por ${day.sector}. Ritmo estimado: ${day.tempo}.`,
      cards: [
        {
          label: "Prioridad",
          title: hasMatch ? "Proteger el horario del partido" : "No partir el dia en demasiadas zonas",
          copy: hasMatch
            ? "Come antes, sal con margen y define punto de encuentro para la salida."
            : "La ruta esta pensada por sectores; aprovecha eso para caminar mas y depender menos de Uber."
        },
        {
          label: "Comida",
          title: hasFood ? firstFood.recommendation : "Dejar comida por definir",
          copy: hasFood
            ? firstFood.reason
            : "Este dia necesita una opcion flexible segun energia, trafico y hora real."
        },
        {
          label: "Cierre",
          title: lastPlan ? `${lastPlan.time} - ${lastPlan.title}` : "Sin cierre cargado",
          copy: lastPlan
            ? "Usa este ultimo bloque como ancla para decidir si agregas algo o descansas."
            : "Cuando el Excel tenga mas detalle, este bloque se llena automaticamente."
        }
      ]
    };
  }

  function renderFoodBoard() {
    const day = selectedDay();
    const cards = day.food.length
      ? day.food
          .map(
            (food) => `
              <div class="food-card">
                <p class="kicker">${food.moment} / ${food.style}</p>
                <h3>${food.recommendation}</h3>
                <p>${food.reason}</p>
                <div class="meta"><span>${food.sector}</span></div>
                <a href="${maps(food.mapQuery)}" target="_blank" rel="noreferrer">Buscar opciones</a>
              </div>
            `
          )
          .join("")
      : '<p class="empty">Este dia no tiene recomendaciones de comida cargadas.</p>';

    el.foodBoard.innerHTML = `
      <article class="food-day food-day--focused is-current">
        <div class="food-day__head">
          <span>${day.date}</span>
          <strong>${day.sector}</strong>
        </div>
        <div class="context-note">
          <strong>Estas recomendaciones son solo para ${day.date}.</strong>
          <p>Si cambias el dia en el calendario, en la lista lateral o con las flechas, esta seccion cambia tambien.</p>
        </div>
        <div class="food-focus-grid">${cards}</div>
      </article>
    `;
  }

  function renderSectors() {
    const day = selectedDay();
    const previous = enrichedDays[day.index - 1];
    const next = enrichedDays[day.index + 1];
    const route = day.plans
      .map(
        (plan) => `
          <li>
            <time>${plan.time}</time>
            <div>
              <strong>${plan.place}</strong>
              <span>${plan.title}</span>
            </div>
          </li>
        `
      )
      .join("");

    el.sectorGrid.innerHTML = `
      <article class="sector-card sector-card--focused">
        <span>${day.date}</span>
        <h3>${day.sector}</h3>
        <p>${day.summary}</p>
        <div class="meta">
          <span>${day.base}</span>
          <span>${day.tempo}</span>
          <span>${day.plans.length} bloques</span>
        </div>
        <div class="route-panel">
          <p class="kicker">Ruta del dia</p>
          <ul>${route}</ul>
        </div>
        <div class="neighbor-days">
          ${previous ? `<button class="small-button" data-sector-day="${previous.id}">Anterior: ${previous.date}</button>` : ""}
          ${next ? `<button class="small-button" data-sector-day="${next.id}">Siguiente: ${next.date}</button>` : ""}
        </div>
      </article>
    `;

    el.sectorGrid.querySelectorAll("[data-sector-day]").forEach((button) => {
      button.addEventListener("click", () => selectDay(button.dataset.sectorDay, { scroll: true }));
    });
  }

  function openDetail(item, day) {
    el.modalContent.innerHTML = `
      <div class="modal__body">
        <p class="kicker">${day.date} / ${labels[item.type]}</p>
        <h2 id="detailTitle">${item.title}</h2>
        <p>${item.description}</p>
        <div class="meta">
          <span>${item.time}</span>
          <span>${item.duration}</span>
          <span>${item.place}</span>
          <span>${day.sector}</span>
        </div>
        <div class="actions">
          <a class="small-button calendar-action" href="${planCalendarUrl(day, item)}" target="_blank" rel="noreferrer">Agregar a Google Calendar</a>
          <a class="small-button" href="${maps(item.mapQuery || item.place)}" target="_blank" rel="noreferrer">Abrir mapa</a>
        </div>
        <ul>
          ${item.tips.map((tip) => `<li>${tip}</li>`).join("")}
        </ul>
      </div>
    `;
    el.modal.showModal();
  }

  function moveDay(delta) {
    const current = selectedDay();
    const next = enrichedDays[current.index + delta];
    if (next) selectDay(next.id);
  }

  function render() {
    renderStats();
    renderTodayPanel();
    renderCalendar();
    renderDays();
    renderDaySummary();
    renderHeader();
    renderViewTabs();
    renderDetailView();
    renderFoodBoard();
    renderSectors();
  }

  el.prevDay.addEventListener("click", () => moveDay(-1));
  el.nextDay.addEventListener("click", () => moveDay(1));
  el.closeModal.addEventListener("click", () => el.modal.close());
  el.modal.addEventListener("click", (event) => {
    if (event.target === el.modal) {
      el.modal.close();
    }
  });

  render();
})();
