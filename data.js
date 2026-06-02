window.WORLD_CUP_TRIP = {
  name: "Cronograma Mundialista Miami",
  note: "Basado en Viajes.xlsx, hoja Miami. Fechas: 22 de junio a 2 de julio de 2026.",
  days: [
    {
      id: "jun-22",
      date: "Lun 22 Jun",
      title: "Salida y llegada a Miami",
      sector: "Aeropuerto / llegada",
      base: "Vuelo 12:08 pm, llegada 7:55 pm",
      tempo: "Viaje",
      summary: "Dia de traslado. Lo importante es llegar, instalarse y dejar una comida flexible para la noche.",
      plans: [
        {
          time: "12:08",
          type: "arrival",
          title: "Salida del vuelo",
          place: "Aeropuerto de origen",
          duration: "Bloque de viaje",
          description: "Inicio oficial del viaje segun el Excel.",
          tips: ["Llegar con margen para documentacion", "Tener a mano reservas, pasaportes y direccion del alojamiento"],
          mapQuery: "airport"
        },
        {
          time: "19:55",
          type: "arrival",
          title: "Llegada a Miami",
          place: "Miami",
          duration: "1 h 30 min",
          description: "Recoger maletas, pasar controles y coordinar el traslado al alojamiento.",
          tips: ["Confirmar si conviene Uber/Lyft o transporte reservado", "Comprar algo basico si el check-in queda tarde"],
          mapQuery: "Miami International Airport"
        },
        {
          time: "21:30",
          type: "food",
          title: "Cena flexible de llegada",
          place: "Segun alojamiento",
          duration: "1 h",
          description: "Cena sin reserva rigida. Si hay energia, Wynwood tiene opciones; si no, buscar algo cerca del alojamiento.",
          tips: ["No alejarse demasiado si el grupo llega cansado", "Dejar una opcion de delivery o restaurante caminable"],
          mapQuery: "late dinner Miami"
        }
      ],
      food: [
        {
          moment: "Cena",
          style: "Flexible",
          sector: "Segun alojamiento",
          recommendation: "Si quedan con energia: 1-800-Lucky en Wynwood. Si no, elegir algo caminable cerca del hospedaje.",
          reason: "Llegan 7:55 pm; conviene no amarrarse a una reserva dificil.",
          mapQuery: "1-800-Lucky Wynwood"
        },
        {
          moment: "Postre",
          style: "Antojo",
          sector: "Wynwood / Miami Beach",
          recommendation: "The Salty para donas/cafe si pasan por Wynwood; Salt & Straw si terminan por Miami Beach.",
          reason: "Plan corto y rico sin convertir la llegada en una jornada pesada.",
          mapQuery: "The Salty Wynwood Miami"
        }
      ]
    },
    {
      id: "jun-23",
      date: "Mar 23 Jun",
      title: "Miami iconico: playa, Art Deco y South Beach",
      sector: "South Beach / Ocean Drive / Lincoln Road",
      base: "Miami Beach",
      tempo: "Medio",
      summary: "Dia caminable de playa, arquitectura Art Deco, Lincoln Road y atardecer en South Pointe Park.",
      plans: [
        {
          time: "09:00",
          type: "city",
          title: "Lummus Park y playa de Miami Beach",
          place: "Lummus Park",
          duration: "2 h",
          description: "Caminar por Lummus Park, ver las casetas de salvavidas y disfrutar la mañana en la playa.",
          tips: ["Llevar bloqueador y agua", "Ideal para fotos temprano antes del calor fuerte"],
          mapQuery: "Lummus Park Miami Beach"
        },
        {
          time: "12:30",
          type: "food",
          title: "Almuerzo en Ocean Drive o Espanola Way",
          place: "Ocean Drive / Espanola Way",
          duration: "1 h 30 min",
          description: "Almuerzo mirando el ambiente de South Beach o en una calle mas peatonal.",
          tips: ["Ocean Drive es mas turistico; Espanola Way suele sentirse mas caminable", "Revisar precios antes de sentarse"],
          mapQuery: "Espanola Way restaurants Miami Beach"
        },
        {
          time: "15:30",
          type: "city",
          title: "Lincoln Road",
          place: "Lincoln Road",
          duration: "2 h",
          description: "Bulevar peatonal con tiendas, cafes y galerias para pasear sin afan.",
          tips: ["Buen bloque para compras pequenas", "Guardar energia para el atardecer"],
          mapQuery: "Lincoln Road Miami Beach"
        },
        {
          time: "18:00",
          type: "city",
          title: "Atardecer en South Pointe Park",
          place: "South Pointe Park",
          duration: "1 h 30 min",
          description: "Cierre del dia en el extremo sur de la isla para ver cruceros, muelle y atardecer.",
          tips: ["Llegar antes de la puesta de sol", "Elegir cena por South Pointe o regresar a la zona base"],
          mapQuery: "South Pointe Park Miami Beach"
        }
      ],
      food: [
        {
          moment: "Almuerzo",
          style: "Cuban / turistico agradable",
          sector: "Espanola Way",
          recommendation: "Havana 1957 Espanola Way.",
          reason: "Esta justo en Espanola Way y sirve para almorzar sin romper la ruta de South Beach.",
          mapQuery: "Havana 1957 Espanola Way"
        },
        {
          moment: "Cena",
          style: "Seafood",
          sector: "Ocean Drive",
          recommendation: "A Fish Called Avalon.",
          reason: "Queda en Ocean Drive y funciona para una cena mas bonita despues del dia Art Deco.",
          mapQuery: "A Fish Called Avalon Ocean Drive"
        },
        {
          moment: "Cena clasica",
          style: "Iconico Miami",
          sector: "South Pointe",
          recommendation: "Joe's Stone Crab o su take-away.",
          reason: "Es el clasico fuerte de la zona sur de Miami Beach; mejor reservar o revisar tiempos.",
          mapQuery: "Joe's Stone Crab Miami Beach"
        }
      ]
    },
    {
      id: "jun-24",
      date: "Mie 24 Jun",
      title: "Vizcaya, Little Havana y Brickell",
      sector: "Coconut Grove / Little Havana / Brickell",
      base: "Ruta urbana",
      tempo: "Medio",
      summary: "Dia de cultura e historia: Vizcaya en la manana, Calle Ocho al almuerzo y skyline de Brickell en la noche.",
      plans: [
        {
          time: "09:30",
          type: "city",
          title: "Vizcaya Museum and Gardens",
          place: "Coconut Grove",
          duration: "2 h 30 min",
          description: "Mansion historica y jardines fotogenicos junto a la bahia.",
          tips: ["Comprar boletas si hay cupos", "Llevar zapatos comodos para jardines"],
          mapQuery: "Vizcaya Museum and Gardens"
        },
        {
          time: "13:00",
          type: "food",
          title: "Almuerzo en Little Havana",
          place: "Calle Ocho",
          duration: "1 h 30 min",
          description: "Comida cubana y paseo por Parque del Domino, ventanitas, cafecito y helado.",
          tips: ["Probar sandwich cubano, ropa vieja o cafecito", "Caminar por Calle Ocho despues de comer"],
          mapQuery: "Little Havana Calle Ocho restaurants"
        },
        {
          time: "18:30",
          type: "city",
          title: "Brickell de noche",
          place: "Brickell",
          duration: "2 h",
          description: "Paseo por Brickell City Centre y rooftop/bar para ver el skyline iluminado.",
          tips: ["Revisar dress code de rooftops", "Reservar si quieren cena sentados"],
          mapQuery: "Brickell City Centre"
        }
      ],
      food: [
        {
          moment: "Almuerzo",
          style: "Cubano",
          sector: "Little Havana",
          recommendation: "Old's Havana en Calle Ocho.",
          reason: "Queda en la zona del paseo y encaja con el dia cubano del Excel.",
          mapQuery: "Old's Havana Calle Ocho"
        },
        {
          moment: "Alternativa",
          style: "Clasico cubano",
          sector: "Little Havana",
          recommendation: "Versailles para una opcion muy iconica.",
          reason: "Buena alternativa si quieren algo historico, aunque queda mas hacia el oeste.",
          mapQuery: "Versailles Restaurant Little Havana"
        },
        {
          moment: "Noche",
          style: "Rooftop",
          sector: "Brickell",
          recommendation: "Sugar o Rosa Sky para drinks/vistas; The Henry si quieren cena mas estable.",
          reason: "Brickell es mejor para skyline y una noche con ambiente.",
          mapQuery: "Sugar rooftop Brickell"
        }
      ]
    },
    {
      id: "jun-25",
      date: "Jue 25 Jun",
      title: "Arte urbano, diseno y compras locales",
      sector: "Wynwood / Design District",
      base: "Wynwood",
      tempo: "Medio",
      summary: "Wynwood temprano para murales, almuerzo en la zona y tarde caminando el Design District.",
      plans: [
        {
          time: "10:00",
          type: "city",
          title: "Wynwood Walls y murales",
          place: "Wynwood",
          duration: "2 h",
          description: "Visitar Wynwood Walls temprano y caminar calles cercanas con murales y galerias.",
          tips: ["Ir temprano por calor y multitudes", "Llevar bateria para fotos"],
          mapQuery: "Wynwood Walls Miami"
        },
        {
          time: "13:00",
          type: "food",
          title: "Almuerzo en Wynwood",
          place: "Wynwood",
          duration: "1 h 30 min",
          description: "Comer en la zona: food hall, mediterraneo, pizza o algo casual.",
          tips: ["1-800-Lucky sirve si el grupo quiere variedad", "Doya es mejor si quieren reservar algo mas cuidado"],
          mapQuery: "Wynwood restaurants Miami"
        },
        {
          time: "15:30",
          type: "city",
          title: "Miami Design District",
          place: "Design District",
          duration: "2 h",
          description: "Caminar arquitectura, esculturas publicas, tiendas y ambiente de diseno.",
          tips: ["No todo es compras: el paseo visual vale mucho", "Mandolin sirve para merienda/cena temprana si reservan"],
          mapQuery: "Miami Design District"
        }
      ],
      food: [
        {
          moment: "Almuerzo",
          style: "Food hall",
          sector: "Wynwood",
          recommendation: "1-800-Lucky.",
          reason: "Tiene varias cocinas asiaticas, barras y funciona bien para grupos.",
          mapQuery: "1-800-Lucky Wynwood"
        },
        {
          moment: "Almuerzo / cena",
          style: "Mediterraneo",
          sector: "Wynwood",
          recommendation: "Doya.",
          reason: "Buena opcion si quieren comer mejor y compartir platos tipo mezze.",
          mapQuery: "Doya Wynwood"
        },
        {
          moment: "Postre",
          style: "Donas / cafe",
          sector: "Wynwood",
          recommendation: "The Salty.",
          reason: "Encaja perfecto como parada corta despues de murales.",
          mapQuery: "The Salty Wynwood"
        },
        {
          moment: "Tarde",
          style: "Mediterraneo bonito",
          sector: "Design District",
          recommendation: "Mandolin Aegean Bistro.",
          reason: "Muy buen fit para cerrar el paseo del Design District con comida al aire libre.",
          mapQuery: "Mandolin Aegean Bistro"
        }
      ]
    },
    {
      id: "jun-26",
      date: "Vie 26 Jun",
      title: "Cumpleanos y bote con mimosas",
      sector: "Biscayne Bay / Miami",
      base: "Plan de celebracion",
      tempo: "Especial",
      summary: "Dia de cumpleanos con bote millonario y mimosas; la cena queda por definir.",
      plans: [
        {
          time: "10:30",
          type: "city",
          title: "Bote millonario con mimosa",
          place: "Biscayne Bay",
          duration: "2 h - 3 h",
          description: "Plan principal del cumpleanos segun el Excel.",
          tips: ["Confirmar punto exacto de salida", "Llevar documento, bloqueador y algo liviano para el sol"],
          mapQuery: "Biscayne Bay boat tour Miami"
        },
        {
          time: "15:30",
          type: "city",
          title: "Tarde libre de cumpleanos",
          place: "Miami",
          duration: "Flexible",
          description: "Bloque para descansar, arreglarse o hacer una parada ligera antes de la cena.",
          tips: ["No sobrecargar el dia", "Reservar cena con anticipacion"],
          mapQuery: "Miami birthday dinner"
        },
        {
          time: "20:00",
          type: "food",
          title: "Cena TBD",
          place: "Por definir",
          duration: "2 h",
          description: "Cena de cumpleanos pendiente de elegir.",
          tips: ["Elegir segun energia: Brickell para skyline, Miami Beach para clasico, Design District para algo lindo"],
          mapQuery: "birthday dinner Miami"
        }
      ],
      food: [
        {
          moment: "Cena",
          style: "Celebracion",
          sector: "Brickell",
          recommendation: "The Henry para cena comoda o Sugar/Rosa Sky para drinks con vista.",
          reason: "Brickell funciona si quieren skyline y plan de noche despues del bote.",
          mapQuery: "The Henry Brickell Miami"
        },
        {
          moment: "Cena",
          style: "Especial",
          sector: "South Beach",
          recommendation: "A Fish Called Avalon o Joe's Stone Crab.",
          reason: "Opcion mas clasica si quieren celebrar cerca de Miami Beach.",
          mapQuery: "A Fish Called Avalon Miami Beach"
        },
        {
          moment: "Cena",
          style: "Bonito / terraza",
          sector: "Design District",
          recommendation: "Mandolin Aegean Bistro.",
          reason: "Ambiente lindo y menos clubby que Brickell.",
          mapQuery: "Mandolin Aegean Bistro Miami"
        }
      ]
    },
    {
      id: "jun-27",
      date: "Sab 27 Jun",
      title: "Playita, Target y partido 7:30 pm",
      sector: "Playa / estadio",
      base: "Partido 7:30 pm",
      tempo: "Intenso",
      summary: "Dia de partido: manana tranquila, compras rapidas y llegada al estadio con bastante margen.",
      plans: [
        {
          time: "10:00",
          type: "city",
          title: "Playita",
          place: "Playa",
          duration: "2 h",
          description: "Manana relajada antes del partido.",
          tips: ["No pasarse de sol", "Dejar listo el outfit/entrada del partido"],
          mapQuery: "Miami Beach"
        },
        {
          time: "13:30",
          type: "city",
          title: "Paseito chill / Target",
          place: "Target",
          duration: "1 h 30 min",
          description: "Compra rapida antes de volver a prepararse para el partido.",
          tips: ["Comprar solo lo necesario", "No salir tarde hacia el estadio"],
          mapQuery: "Target Miami"
        },
        {
          time: "16:30",
          type: "transport",
          title: "Traslado al estadio",
          place: "Estadio",
          duration: "2 h",
          description: "Salir con margen por trafico, parqueo, seguridad y filas.",
          tips: ["Llegar minimo 90 minutos antes", "Confirmar puerta y politica de bolsos"],
          mapQuery: "Hard Rock Stadium Miami Gardens"
        },
        {
          time: "19:30",
          type: "match",
          title: "Partido",
          place: "Estadio",
          duration: "3 h",
          description: "Bloque principal del dia.",
          tips: ["Definir punto de encuentro al salir", "Guardar paciencia para el trafico post-partido"],
          mapQuery: "Hard Rock Stadium"
        }
      ],
      food: [
        {
          moment: "Antes del partido",
          style: "Rapido y seguro",
          sector: "Antes de salir",
          recommendation: "Comer antes de ir al estadio, en la zona base o camino al estadio.",
          reason: "El partido es 7:30 pm; comer tarde cerca del estadio puede volverse filas y trafico.",
          mapQuery: "restaurants near Hard Rock Stadium"
        },
        {
          moment: "Post-partido",
          style: "Flexible",
          sector: "Ruta de regreso",
          recommendation: "Guardar una opcion de comida cerca del hotel o delivery.",
          reason: "La salida del estadio puede demorar y cambia el horario real de cena.",
          mapQuery: "late night food Miami"
        }
      ]
    },
    {
      id: "jun-28",
      date: "Dom 28 Jun",
      title: "Outlets Dolphin Mall y Doral",
      sector: "Doral / Dolphin Mall",
      base: "Carro: si",
      tempo: "Compras",
      summary: "Dia con carro para Dolphin Mall y Doral.",
      plans: [
        {
          time: "10:30",
          type: "transport",
          title: "Recoger / usar carro",
          place: "Miami",
          duration: "Flexible",
          description: "El Excel marca carro para este dia.",
          tips: ["Confirmar parqueaderos", "Guardar tickets de peajes/gasolina"],
          mapQuery: "Dolphin Mall parking"
        },
        {
          time: "12:00",
          type: "city",
          title: "Outlets Dolphin Mall",
          place: "Dolphin Mall",
          duration: "4 h",
          description: "Bloque de compras en Dolphin Mall.",
          tips: ["Hacer lista de tiendas antes", "Separar punto de encuentro"],
          mapQuery: "Dolphin Mall"
        },
        {
          time: "18:30",
          type: "food",
          title: "Cena en Doral",
          place: "Doral",
          duration: "1 h 30 min",
          description: "Cenar en Doral despues de compras.",
          tips: ["Reservar si eligen Bulla o Pisco y Nazca", "Validar parqueadero"],
          mapQuery: "Downtown Doral restaurants"
        }
      ],
      food: [
        {
          moment: "Cena",
          style: "Tapas",
          sector: "Downtown Doral",
          recommendation: "Bulla Gastrobar Doral.",
          reason: "Tapas y paella: buena opcion para grupo despues de compras.",
          mapQuery: "Bulla Gastrobar Doral"
        },
        {
          moment: "Cena",
          style: "Peruano",
          sector: "Downtown Doral",
          recommendation: "Pisco y Nazca Doral.",
          reason: "Ceviche, lomo y platos peruanos con ambiente de gastrobar.",
          mapQuery: "Pisco y Nazca Doral"
        }
      ]
    },
    {
      id: "jun-29",
      date: "Lun 29 Jun",
      title: "Key West",
      sector: "Key West",
      base: "Carro: si",
      tempo: "Road trip",
      summary: "Ruta a Key West con Mallory Square, Duval Street, Casa de Hemingway y key lime pie.",
      plans: [
        {
          time: "07:30",
          type: "transport",
          title: "Salida hacia Key West",
          place: "Miami - Key West",
          duration: "3 h 30 min - 4 h",
          description: "Road trip largo. Salir temprano para aprovechar el dia.",
          tips: ["Cargar gasolina antes", "Llevar agua y snacks", "Contemplar paradas en la ruta"],
          mapQuery: "Miami to Key West"
        },
        {
          time: "12:30",
          type: "food",
          title: "Almuerzo en Key West",
          place: "Key West",
          duration: "1 h 30 min",
          description: "Comer antes de caminar Duval Street y la zona historica.",
          tips: ["Reservar si quieren restaurante sentado", "Probar algo con key lime"],
          mapQuery: "Key West restaurants"
        },
        {
          time: "14:30",
          type: "city",
          title: "Duval Street y Casa de Hemingway",
          place: "Key West",
          duration: "2 h 30 min",
          description: "Recorrido por Duval Street y visita a la historica Casa de Hemingway.",
          tips: ["Revisar horario de entrada", "Caminar ligero por calor"],
          mapQuery: "Ernest Hemingway Home and Museum"
        },
        {
          time: "18:00",
          type: "city",
          title: "Mallory Square",
          place: "Mallory Square",
          duration: "1 h 30 min",
          description: "Atardecer y ambiente clasico de Key West.",
          tips: ["Llegar antes del sunset", "Definir hora de regreso a Miami"],
          mapQuery: "Mallory Square Key West"
        }
      ],
      food: [
        {
          moment: "Almuerzo",
          style: "Iconico",
          sector: "Key West",
          recommendation: "Blue Heaven.",
          reason: "Sitio clasico de Key West para comida caribena y key lime pie.",
          mapQuery: "Blue Heaven Key West"
        },
        {
          moment: "Postre",
          style: "Key lime pie",
          sector: "Key West",
          recommendation: "Kermit's Key Lime Shop.",
          reason: "Buena parada directa para probar key lime pie, incluso en version congelada.",
          mapQuery: "Kermit's Key Lime Shop Key West"
        },
        {
          moment: "Cena ligera",
          style: "Frente al mar",
          sector: "Key West",
          recommendation: "Salute! On The Beach si quieren comer antes de volver.",
          reason: "Opcion cerca de playa para cerrar el road trip sin hacerlo demasiado formal.",
          mapQuery: "Salute On The Beach Key West"
        }
      ]
    },
    {
      id: "jun-30",
      date: "Mar 30 Jun",
      title: "Outlets Sawgrass",
      sector: "Sawgrass Mills / Sunrise",
      base: "Carro: si",
      tempo: "Compras largo",
      summary: "Dia fuerte de outlets en Sawgrass Mills.",
      plans: [
        {
          time: "09:30",
          type: "transport",
          title: "Salida a Sawgrass Mills",
          place: "Miami - Sunrise",
          duration: "1 h - 1 h 30 min",
          description: "Traslado con carro hacia Sawgrass Mills.",
          tips: ["Revisar peajes", "Tomar foto del punto de parqueo"],
          mapQuery: "Sawgrass Mills"
        },
        {
          time: "11:00",
          type: "city",
          title: "Compras en Sawgrass",
          place: "Sawgrass Mills",
          duration: "6 h",
          description: "Bloque principal de compras.",
          tips: ["Dividir tiendas por prioridad", "Definir almuerzo y punto de encuentro"],
          mapQuery: "Sawgrass Mills stores"
        },
        {
          time: "17:30",
          type: "food",
          title: "Comida antes de volver",
          place: "Sawgrass Mills",
          duration: "1 h",
          description: "Cenar o merendar fuerte antes de regresar a Miami.",
          tips: ["Elegir restaurante dentro o al borde del mall", "Volver antes de quedar demasiado cansados"],
          mapQuery: "Sawgrass Mills restaurants"
        }
      ],
      food: [
        {
          moment: "Almuerzo / cena",
          style: "Mall casual",
          sector: "Sawgrass Mills",
          recommendation: "Yard House.",
          reason: "Menu amplio, buen fit para grupo y queda en la zona del mall.",
          mapQuery: "Yard House Sawgrass Mills"
        },
        {
          moment: "Almuerzo / cena",
          style: "Mall sentado",
          sector: "Sawgrass Mills",
          recommendation: "Grand Lux Cafe.",
          reason: "Opcion grande y practica para descansar de compras.",
          mapQuery: "Grand Lux Cafe Sawgrass Mills"
        }
      ]
    },
    {
      id: "jul-01",
      date: "Mie 1 Jul",
      title: "Brickell, playa y maletas",
      sector: "Brickell / Miami Beach",
      base: "Carro: si",
      tempo: "Cierre",
      summary: "Ultimo dia completo: Brickell, playa ligera y organizar maletas.",
      plans: [
        {
          time: "10:30",
          type: "city",
          title: "Brickell tranquilo",
          place: "Brickell",
          duration: "2 h",
          description: "Paseo ligero o compras finales por Brickell City Centre.",
          tips: ["No comprar mas de lo que cabe en maleta", "Separar documentos de viaje"],
          mapQuery: "Brickell City Centre"
        },
        {
          time: "14:30",
          type: "city",
          title: "Playa corta",
          place: "Miami Beach",
          duration: "2 h",
          description: "Ultimo bloque de playa si el clima acompana.",
          tips: ["No dejar maletas para ultima hora", "Volver con margen al alojamiento"],
          mapQuery: "Miami Beach"
        },
        {
          time: "18:30",
          type: "transport",
          title: "Maletas y cierre",
          place: "Alojamiento",
          duration: "2 h",
          description: "Organizar equipaje y compras para el vuelo del dia siguiente.",
          tips: ["Pesar maletas", "Separar outfit/documentos de regreso"],
          mapQuery: "Miami hotel"
        }
      ],
      food: [
        {
          moment: "Brunch / almuerzo",
          style: "Brickell comodo",
          sector: "Brickell City Centre",
          recommendation: "The Henry, Motek o Cafe Americano.",
          reason: "Opciones practicas dentro o cerca de Brickell City Centre.",
          mapQuery: "The Henry Brickell"
        },
        {
          moment: "Cena final",
          style: "Vista / despedida",
          sector: "Brickell",
          recommendation: "Sugar o Rosa Sky para drinks; The Henry si quieren cena mas relajada.",
          reason: "Buen cierre sin alejarse demasiado antes del viaje de regreso.",
          mapQuery: "Rosa Sky Brickell"
        }
      ]
    },
    {
      id: "jul-02",
      date: "Jue 2 Jul",
      title: "Salida de Miami",
      sector: "Aeropuerto / regreso",
      base: "Salida 5:14 pm, llegada 10:55 pm",
      tempo: "Viaje",
      summary: "Dia de regreso. Mantener la manana simple y salir con tiempo al aeropuerto.",
      plans: [
        {
          time: "10:00",
          type: "food",
          title: "Desayuno y check-out",
          place: "Alojamiento",
          duration: "2 h",
          description: "Comer, cerrar maletas y revisar que no falte nada.",
          tips: ["Confirmar hora de check-out", "Guardar compras fragiles en equipaje adecuado"],
          mapQuery: "breakfast near Miami hotel"
        },
        {
          time: "13:30",
          type: "transport",
          title: "Salida al aeropuerto",
          place: "Miami International Airport",
          duration: "1 h",
          description: "Traslado con margen suficiente para devolver carro o hacer check-in.",
          tips: ["Si hay carro, incluir tiempo de devolucion", "Revisar trafico antes de salir"],
          mapQuery: "Miami International Airport"
        },
        {
          time: "17:14",
          type: "arrival",
          title: "Vuelo de regreso",
          place: "Miami",
          duration: "Bloque de viaje",
          description: "Salida de Miami segun el Excel.",
          tips: ["Tener documentos a mano", "Comprar comida antes de abordar si el vuelo no incluye"],
          mapQuery: "Miami International Airport"
        },
        {
          time: "22:55",
          type: "arrival",
          title: "Llegada",
          place: "Destino final",
          duration: "Fin del viaje",
          description: "Cierre del cronograma.",
          tips: ["Coordinar transporte de llegada", "Separar recibos/gastos si van a liquidar costos"],
          mapQuery: "airport arrivals"
        }
      ],
      food: [
        {
          moment: "Desayuno",
          style: "Cerca y facil",
          sector: "Alojamiento / aeropuerto",
          recommendation: "Elegir desayuno caminable o en ruta al aeropuerto.",
          reason: "El foco del dia es no complicar la salida de 5:14 pm.",
          mapQuery: "breakfast near Miami hotel"
        },
        {
          moment: "Antes de abordar",
          style: "Pratico",
          sector: "Aeropuerto",
          recommendation: "Comprar algo antes de abordar si el vuelo no incluye comida.",
          reason: "Llegada final 10:55 pm; mejor no depender de cenar tarde.",
          mapQuery: "Miami International Airport food"
        }
      ]
    }
  ]
};
