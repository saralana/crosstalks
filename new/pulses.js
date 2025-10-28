const pulses = [
  {
    "start": 0.0,
    "end": 19.08,
    "type": "default"
  },
  {
    "start": 19.48,
    "end": 20.08,
    "type": "Dime."
  },
  {
    "start": 20.62,
    "end": 20.9,
    "type": "Dime."
  },
  {
    "start": 20.9,
    "end": 21.06,
    "type": "Buenas."
  },
  {
    "start": 21.3,
    "end": 22.16,
    "type": "Buenas tardes."
  },
  {
    "start": 22.3,
    "end": 22.86,
    "type": "\u00bfQui\u00e9n es?"
  },
  {
    "start": 23.06,
    "end": 23.78,
    "type": "Dime, habla."
  },
  {
    "start": 23.84,
    "end": 25.64,
    "type": "Yo quiero saber c\u00f3mo se llama la persona"
  },
  {
    "start": 25.64,
    "end": 26.02,
    "type": "que me habla."
  },
  {
    "start": 26.08,
    "end": 26.68,
    "type": "Mauricio."
  },
  {
    "start": 27.0,
    "end": 27.3,
    "type": "Ah."
  },
  {
    "start": 28.22,
    "end": 31.04,
    "type": "Me puedes llamar Mauricio o Mauri."
  },
  {
    "start": 31.159,
    "end": 31.4,
    "type": "S\u00ed."
  },
  {
    "start": 31.86,
    "end": 33.4,
    "type": "Te paso con mi madre."
  },
  {
    "start": 33.76,
    "end": 34.04,
    "type": "S\u00ed."
  },
  {
    "start": 36.06,
    "end": 36.52,
    "type": "Eh."
  },
  {
    "start": 38.5,
    "end": 39.46,
    "type": "Esp\u00e9rate, esp\u00e9rate."
  },
  {
    "start": 39.62,
    "end": 40.1,
    "type": "\u00bfMami?"
  },
  {
    "start": 42.95,
    "end": 43.33,
    "type": "\u00bfS\u00ed?"
  },
  {
    "start": 43.77,
    "end": 44.13,
    "type": "\u00bfS\u00ed?"
  },
  {
    "start": 44.75,
    "end": 45.83,
    "type": "\u00bfEsto es un tel\u00e9fono p\u00fablico?"
  },
  {
    "start": 50.23,
    "end": 51.95,
    "type": "S\u00ed, t\u00fa llamaste a un tel\u00e9fono p\u00fablico."
  },
  {
    "start": 52.11,
    "end": 53.39,
    "type": "Esto es un tel\u00e9fono p\u00fablico."
  },
  {
    "start": 53.51,
    "end": 55.11,
    "type": "Es una p\u00fablica, pero es mi casa."
  },
  {
    "start": 55.61,
    "end": 56.17,
    "type": "Ya no sirve."
  },
  {
    "start": 57.11,
    "end": 59.01,
    "type": "No, ya no la usan."
  },
  {
    "start": 60.85,
    "end": 62.97,
    "type": "La verdad yo no veo casi ya gente"
  },
  {
    "start": 62.97,
    "end": 64.15,
    "type": "utiliz\u00e1ndolo."
  },
  {
    "start": 64.55,
    "end": 67.11,
    "type": "Muy poca utilidad tiene esta cabina."
  },
  {
    "start": 67.25,
    "end": 68.89,
    "type": "Algunas personas llaman, pero muy poco."
  },
  {
    "start": 68.89,
    "end": 70.63,
    "type": "No, no est\u00e1 funcionando."
  },
  {
    "start": 72.17,
    "end": 76.65,
    "type": "Dejaron con llamada de servicio urgente."
  },
  {
    "start": 77.03,
    "end": 80.75,
    "type": "Uno llama a la perre\u00eda carabinero al 1233."
  },
  {
    "start": 80.83,
    "end": 81.33,
    "type": "Muy poco."
  },
  {
    "start": 81.51,
    "end": 83.71,
    "type": "S\u00ed, de hecho s\u00ed van a checarlos y"
  },
  {
    "start": 83.71,
    "end": 87.11,
    "type": "eso, pero yo no veo \u00faltimamente que vayan"
  },
  {
    "start": 87.11,
    "end": 88.27,
    "type": "a sacar las monedas."
  },
  {
    "start": 89.11,
    "end": 90.43,
    "type": "Quitaron las cabinas."
  },
  {
    "start": 90.59,
    "end": 94.45,
    "type": "Nosotros las seguimos manteniendo, pero ya no hay"
  },
  {
    "start": 94.45,
    "end": 95.67,
    "type": "uso de cabinas."
  },
  {
    "start": 95.67,
    "end": 98.93,
    "type": "Es decir, que no se hace uso."
  },
  {
    "start": 99.15,
    "end": 101.43,
    "type": "Con los m\u00f3viles, pues dej\u00f3 de usarse."
  },
  {
    "start": 101.65,
    "end": 103.41,
    "type": "\u00bfEste tel\u00e9fono en el liceo?"
  },
  {
    "start": 105.59,
    "end": 106.55,
    "type": "Hace a\u00f1ares."
  },
  {
    "start": 106.61,
    "end": 111.29,
    "type": "Debe hacer como, no s\u00e9, como 30 a\u00f1os."
  },
  {
    "start": 111.43,
    "end": 112.71,
    "type": "No s\u00e9, no, 20 a\u00f1os capaz."
  },
  {
    "start": 113.15,
    "end": 114.61,
    "type": "S\u00ed, hace much\u00edsimo tiempo ya."
  },
  {
    "start": 114.85,
    "end": 116.75,
    "type": "M\u00e1s de 40 a\u00f1os."
  },
  {
    "start": 116.99,
    "end": 118.87,
    "type": "S\u00ed, ya hace mucho, s\u00ed."
  },
  {
    "start": 118.87,
    "end": 123.01,
    "type": "Pero bueno, este s\u00ed, durante muchos a\u00f1os fue"
  },
  {
    "start": 123.01,
    "end": 126.19,
    "type": "el tel\u00e9fono que hab\u00eda, bueno, pues en una"
  },
  {
    "start": 126.19,
    "end": 127.55,
    "type": "poblaci\u00f3n."
  },
  {
    "start": 128.99,
    "end": 131.71,
    "type": "Antes hab\u00eda en muchos lugares, pero ahora como"
  },
  {
    "start": 131.71,
    "end": 132.15,
    "type": "que no."
  },
  {
    "start": 132.35,
    "end": 134.79,
    "type": "Hay un tel\u00e9fono p\u00fablico, pero est\u00e1 malo."
  },
  {
    "start": 134.81,
    "end": 136.01,
    "type": "Esta es la \u00fanica que tenemos."
  },
  {
    "start": 136.31,
    "end": 137.17,
    "type": "Es un pueblito chico."
  },
  {
    "start": 137.75,
    "end": 138.89,
    "type": "Tambi\u00e9n hay otro."
  },
  {
    "start": 139.09,
    "end": 140.97,
    "type": "Solamente este, este que yo conozco de ac\u00e1"
  },
  {
    "start": 140.97,
    "end": 141.55,
    "type": "de Canelones."
  },
  {
    "start": 141.83,
    "end": 143.41,
    "type": "S\u00ed, es el \u00fanico que hay, claro."
  },
  {
    "start": 143.41,
    "end": 146.59,
    "type": "Dentro de todo el ayuntamiento hab\u00eda cuatro tel\u00e9fonos"
  },
  {
    "start": 146.59,
    "end": 147.17,
    "type": "p\u00fablicos."
  },
  {
    "start": 147.47,
    "end": 150.19,
    "type": "Hay cuatro o cinco parroquias y era un"
  },
  {
    "start": 150.19,
    "end": 151.61,
    "type": "tel\u00e9fono en cada parroquia."
  },
  {
    "start": 151.91,
    "end": 153.45,
    "type": "Era como un servicio p\u00fablico."
  },
  {
    "start": 153.77,
    "end": 154.91,
    "type": "S\u00ed, fica dentro as\u00ed."
  },
  {
    "start": 155.15,
    "end": 157.51,
    "type": "S\u00ed, porque est\u00e1 bueno, es un tel\u00e9fono p\u00fablico."
  },
  {
    "start": 159.91,
    "end": 163.35,
    "type": "Y claro, como es un bar, pues la"
  },
  {
    "start": 163.35,
    "end": 166.17,
    "type": "gente pues acud\u00eda al bar, a la tienda"
  },
  {
    "start": 166.17,
    "end": 168.11,
    "type": "y tal, y de paso hac\u00eda la llamada."
  },
  {
    "start": 168.87,
    "end": 170.87,
    "type": "No, est\u00e1 dentro de la oficina, pero la"
  },
  {
    "start": 170.87,
    "end": 172.03,
    "type": "gente puede utilizarlo."
  },
  {
    "start": 172.03,
    "end": 173.75,
    "type": "No, en la rueda no se puede usar"
  },
  {
    "start": 173.75,
    "end": 178.03,
    "type": "porque las personas rompen todo."
  },
  {
    "start": 178.59,
    "end": 182.69,
    "type": "S\u00ed, el tel\u00e9fono siempre es adonde unimos a"
  },
  {
    "start": 182.69,
    "end": 184.51,
    "type": "veces a jugar ac\u00e1 al frente."
  },
  {
    "start": 186.89,
    "end": 190.03,
    "type": "Es la entrada del centro de la universidad."
  },
  {
    "start": 190.63,
    "end": 193.21,
    "type": "S\u00ed, esta l\u00ednea est\u00e1 en un centro educativo."
  },
  {
    "start": 196.05,
    "end": 197.17,
    "type": "Justo toc\u00f3 el timbre."
  },
  {
    "start": 202.22,
    "end": 204.26,
    "type": "Yo lo entend\u00ed porque empez\u00f3 a sonar, pero..."
  },
  {
    "start": 204.26,
    "end": 205.72,
    "type": "S\u00ed, porque sonaba el tel\u00e9fono en vivo."
  },
  {
    "start": 206.52,
    "end": 207.58,
    "type": "Fue que era raro que suene."
  },
  {
    "start": 209.08,
    "end": 210.94,
    "type": "Y sal\u00ed a atenderlo."
  },
  {
    "start": 212.24,
    "end": 213.6,
    "type": "Le fue a suerte, \u00bfverdad que s\u00ed?"
  },
  {
    "start": 215.32,
    "end": 217.6,
    "type": "No, nunca llamaron por ac\u00e1."
  },
  {
    "start": 218.14,
    "end": 221.86,
    "type": "M\u00e1s para llamar que para recibir llamadas."
  },
  {
    "start": 221.98,
    "end": 222.7,
    "type": "Es muy raro."
  },
  {
    "start": 223.04,
    "end": 224.62,
    "type": "No, no recibe tampoco."
  },
  {
    "start": 224.94,
    "end": 226.88,
    "type": "A lo mejor llama una persona en todo"
  },
  {
    "start": 226.88,
    "end": 227.24,
    "type": "el a\u00f1o."
  },
  {
    "start": 227.54,
    "end": 229.7,
    "type": "No, porque este es un tel\u00e9fono de monedas"
  },
  {
    "start": 229.7,
    "end": 232.62,
    "type": "que pr\u00e1cticamente no funciona."
  },
  {
    "start": 232.62,
    "end": 236.26,
    "type": "La gente tiene tel\u00e9fonos m\u00f3viles y esto no"
  },
  {
    "start": 236.26,
    "end": 237.0,
    "type": "funciona."
  },
  {
    "start": 237.16,
    "end": 239.92,
    "type": "Est\u00e1 porque estaba y por no tirarlo, pero"
  },
  {
    "start": 239.92,
    "end": 240.4,
    "type": "no funciona."
  },
  {
    "start": 240.62,
    "end": 244.88,
    "type": "Ahora los celulares desplazaron los tel\u00e9fonos p\u00fablicos, entonces..."
  },
  {
    "start": 245.36,
    "end": 245.8,
    "type": "S\u00ed, s\u00ed."
  },
  {
    "start": 247.34,
    "end": 250.84,
    "type": "En algunas casas tienen cuatro o cinco tel\u00e9fonos"
  },
  {
    "start": 250.84,
    "end": 251.06,
    "type": "m\u00f3viles."
  },
  {
    "start": 251.68,
    "end": 253.78,
    "type": "Normalmente tienen dos equipos m\u00f3viles por persona."
  },
  {
    "start": 254.08,
    "end": 256.579,
    "type": "Nadie lo reclama porque, claro, con los m\u00f3viles"
  },
  {
    "start": 256.579,
    "end": 258.14,
    "type": "nadie reclama el tel\u00e9fono."
  },
  {
    "start": 258.8,
    "end": 260.54,
    "type": "Bueno, mira, te digo una cosa."
  },
  {
    "start": 260.66,
    "end": 260.82,
    "type": "\u00bfC\u00f3mo?"
  },
  {
    "start": 260.82,
    "end": 261.36,
    "type": "Perdona un segundo."
  },
  {
    "start": 261.52,
    "end": 264.1,
    "type": "Mira, es que este es un restaurante y"
  },
  {
    "start": 264.1,
    "end": 265.22,
    "type": "estamos justo con las comidas."
  },
  {
    "start": 265.42,
    "end": 267.22,
    "type": "Si me quieres llamar m\u00e1s tarde, a ti"
  },
  {
    "start": 267.22,
    "end": 268.18,
    "type": "ando sin ning\u00fan problema, \u00bfvale?"
  },
  {
    "start": 268.28,
    "end": 269.98,
    "type": "Bueno, pues despu\u00e9s te llamo."
  },
  {
    "start": 270.16,
    "end": 270.76,
    "type": "\u00bfA las nueve?"
  },
  {
    "start": 270.86,
    "end": 271.54,
    "type": "A la hora que t\u00fa quieras."
  },
  {
    "start": 271.56,
    "end": 272.98,
    "type": "A la hora que os quieras."
  },
  {
    "start": 273.14,
    "end": 274.92,
    "type": "Puedes preguntar por Roberto o por Margarita, no"
  },
  {
    "start": 274.92,
    "end": 275.28,
    "type": "te preocupes."
  },
  {
    "start": 275.54,
    "end": 276.3,
    "type": "Cualquiera de los dos."
  },
  {
    "start": 276.6,
    "end": 276.94,
    "type": "Dale."
  },
  {
    "start": 277.14,
    "end": 277.82,
    "type": "Venga, gracias."
  },
  {
    "start": 278.22,
    "end": 278.7,
    "type": "Hasta luego."
  },
  {
    "start": 302.72,
    "end": 303.24,
    "type": "Atenci\u00f3n."
  },
  {
    "start": 303.74,
    "end": 305.38,
    "type": "CNT le informa que el n\u00famero que usted"
  },
  {
    "start": 305.38,
    "end": 306.3,
    "type": "marc\u00f3 no existe."
  },
  {
    "start": 306.52,
    "end": 308.52,
    "type": "Por favor, int\u00e9ntelo m\u00e1s tarde."
  },
  {
    "start": 309.54,
    "end": 311.62,
    "type": "El n\u00famero al que llama no est\u00e1 disponible"
  },
  {
    "start": 311.62,
    "end": 312.44,
    "type": "en estos momentos."
  },
  {
    "start": 312.6,
    "end": 313.34,
    "type": "Lo sentimos."
  },
  {
    "start": 313.76,
    "end": 317.12,
    "type": "No tiene saldo suficiente para realizar esta llamada."
  },
  {
    "start": 317.16,
    "end": 319.54,
    "type": "El n\u00famero que usted llama est\u00e1 restringido."
  },
  {
    "start": 319.7,
    "end": 321.2,
    "type": "Sugerimos llamar m\u00e1s tarde."
  },
  {
    "start": 321.34,
    "end": 323.7,
    "type": "Estimado cliente, el n\u00famero que usted marc\u00f3 est\u00e1"
  },
  {
    "start": 323.7,
    "end": 325.82,
    "type": "moment\u00e1neamente fuera de servicio."
  },
  {
    "start": 334.68,
    "end": 335.16,
    "type": "Diga."
  },
  {
    "start": 335.94,
    "end": 336.12,
    "type": "Hola."
  },
  {
    "start": 337.32,
    "end": 338.28,
    "type": "Buenas tardes."
  },
  {
    "start": 338.58,
    "end": 339.0,
    "type": "Gracias."
  },
  {
    "start": 340.2,
    "end": 341.5,
    "type": "No es un p\u00fablico, mi vida."
  },
  {
    "start": 342.86,
    "end": 345.0,
    "type": "Le puedo decir un n\u00famero de una p\u00fablica"
  },
  {
    "start": 345.0,
    "end": 348.98,
    "type": "en Trinidad, 4199-2598."
  },
  {
    "start": 357.64,
    "end": 358.12,
    "type": "Al\u00f3."
  },
  {
    "start": 358.18,
    "end": 358.48,
    "type": "Al\u00f3."
  },
  {
    "start": 358.58,
    "end": 358.82,
    "type": "Al\u00f3."
  },
  {
    "start": 358.94,
    "end": 359.18,
    "type": "Al\u00f3."
  },
  {
    "start": 359.34,
    "end": 359.7,
    "type": "Al\u00f3."
  },
  {
    "start": 359.7,
    "end": 359.8,
    "type": "Al\u00f3."
  },
  {
    "start": 359.8,
    "end": 360.14,
    "type": "Al\u00f3."
  },
  {
    "start": 360.14,
    "end": 360.24,
    "type": "Al\u00f3."
  },
  {
    "start": 360.3,
    "end": 360.58,
    "type": "Hola."
  },
  {
    "start": 360.92,
    "end": 361.38,
    "type": "Hola."
  },
  {
    "start": 361.52,
    "end": 362.68,
    "type": "Hola, buenas tardes."
  },
  {
    "start": 362.78,
    "end": 363.6,
    "type": "Buenos tardes."
  },
  {
    "start": 363.64,
    "end": 364.62,
    "type": "Buenas tardes."
  },
  {
    "start": 364.66,
    "end": 366.04,
    "type": "Buenas tardes."
  },
  {
    "start": 366.04,
    "end": 366.68,
    "type": "Buenas tardes, d\u00edgame."
  },
  {
    "start": 366.86,
    "end": 367.16,
    "type": "Diga."
  },
  {
    "start": 367.32,
    "end": 367.56,
    "type": "Diga."
  },
  {
    "start": 367.64,
    "end": 368.02,
    "type": "D\u00edgame."
  },
  {
    "start": 368.28,
    "end": 368.52,
    "type": "D\u00edgame."
  },
  {
    "start": 368.84,
    "end": 369.32,
    "type": "D\u00edgame."
  },
  {
    "start": 369.42,
    "end": 369.74,
    "type": "D\u00edgame."
  },
  {
    "start": 369.98,
    "end": 370.46,
    "type": "S\u00ed."
  },
  {
    "start": 370.58,
    "end": 370.7,
    "type": "S\u00ed."
  },
  {
    "start": 371.5,
    "end": 371.98,
    "type": "S\u00ed."
  },
  {
    "start": 372.06,
    "end": 372.32,
    "type": "S\u00ed."
  },
  {
    "start": 372.44,
    "end": 372.8,
    "type": "S\u00ed."
  },
  {
    "start": 372.8,
    "end": 372.96,
    "type": "S\u00ed."
  },
  {
    "start": 372.96,
    "end": 373.06,
    "type": "S\u00ed."
  },
  {
    "start": 373.06,
    "end": 374.18,
    "type": "Pero, \u00bfc\u00f3mo te llam\u00e1s?"
  },
  {
    "start": 374.3,
    "end": 374.78,
    "type": "Silvia."
  },
  {
    "start": 374.92,
    "end": 375.28,
    "type": "Vanessa."
  },
  {
    "start": 375.42,
    "end": 375.9,
    "type": "Edurodrigo."
  },
  {
    "start": 375.94,
    "end": 376.12,
    "type": "In\u00e9s."
  },
  {
    "start": 376.16,
    "end": 376.64,
    "type": "Rosario."
  },
  {
    "start": 376.76,
    "end": 377.02,
    "type": "Suli."
  },
  {
    "start": 377.02,
    "end": 379.6,
    "type": "Estoy hablando de la Ciudad de Bella Uni\u00f3n,"
  },
  {
    "start": 379.72,
    "end": 381.98,
    "type": "Departamento de Artigas, ac\u00e1 frontera con Brasil."
  },
  {
    "start": 382.18,
    "end": 383.14,
    "type": "\u00bfLlamas desde Brasil?"
  },
  {
    "start": 383.3,
    "end": 384.74,
    "type": "Eh, en Galicia, Lugo."
  },
  {
    "start": 384.78,
    "end": 385.54,
    "type": "En Bandera."
  },
  {
    "start": 385.6,
    "end": 387.1,
    "type": "En Paredes de Santo."
  },
  {
    "start": 387.4,
    "end": 388.34,
    "type": "Cuba en Chile."
  },
  {
    "start": 388.78,
    "end": 390.26,
    "type": "En Cana\u00faba y en Or\u00e9gano."
  },
  {
    "start": 390.94,
    "end": 392.72,
    "type": "Eh, Chao de Pau, Sadoiro."
  },
  {
    "start": 393.1,
    "end": 394.16,
    "type": "En Rivera de Piqu\u00edn."
  },
  {
    "start": 394.26,
    "end": 394.82,
    "type": "Cachilluyo."
  },
  {
    "start": 394.9,
    "end": 395.94,
    "type": "Eh, Jordal y Claver\u00eda."
  },
  {
    "start": 395.96,
    "end": 396.7,
    "type": "Cuba, Trinidad."
  },
  {
    "start": 396.78,
    "end": 397.22,
    "type": "Jamaica."
  },
  {
    "start": 397.64,
    "end": 398.48,
    "type": "En Guant\u00e1namo."
  },
  {
    "start": 398.76,
    "end": 399.44,
    "type": "Pazos de Patria."
  },
  {
    "start": 399.88,
    "end": 400.4,
    "type": "Bien Boc\u00fa."
  },
  {
    "start": 400.44,
    "end": 400.72,
    "type": "Cuba."
  },
  {
    "start": 400.84,
    "end": 401.4,
    "type": "Cienfuegos."
  },
  {
    "start": 401.52,
    "end": 402.08,
    "type": "Canelones."
  },
  {
    "start": 402.38,
    "end": 402.78,
    "type": "Uruguay."
  },
  {
    "start": 403.12,
    "end": 404.36,
    "type": "\u00bfUsted nunca estaba en Trinidad?"
  },
  {
    "start": 404.36,
    "end": 405.0,
    "type": "Pero no."
  },
  {
    "start": 405.68,
    "end": 406.24,
    "type": "Ah, Lugo."
  },
  {
    "start": 406.3,
    "end": 407.4,
    "type": "\u00bfTiene que venir a Trinidad?"
  },
  {
    "start": 407.54,
    "end": 408.7,
    "type": "\u00bfTiene que venir a Trinidad?"
  },
  {
    "start": 408.96,
    "end": 409.64,
    "type": "S\u00ed, exactamente."
  },
  {
    "start": 410.26,
    "end": 410.92,
    "type": "\u00bfC\u00f3mo no?"
  },
  {
    "start": 411.08,
    "end": 412.66,
    "type": "Venga a visitar los thrift shoppers que hay"
  },
  {
    "start": 412.66,
    "end": 413.04,
    "type": "varios."
  },
  {
    "start": 414.6,
    "end": 416.42,
    "type": "Me encantar\u00eda conocerla."
  },
  {
    "start": 416.52,
    "end": 418.3,
    "type": "Puede venir por aqu\u00ed por Belle Uni\u00f3n."
  },
  {
    "start": 418.46,
    "end": 418.7,
    "type": "S\u00ed."
  },
  {
    "start": 419.04,
    "end": 419.62,
    "type": "Para conocer."
  },
  {
    "start": 419.86,
    "end": 422.06,
    "type": "Aqu\u00ed estamos cerquita de los museos."
  },
  {
    "start": 422.3,
    "end": 422.62,
    "type": "Aj\u00e1."
  },
  {
    "start": 422.78,
    "end": 424.04,
    "type": "Cerquita de la escalinata."
  },
  {
    "start": 424.32,
    "end": 425.34,
    "type": "Cerquita de la iglesia."
  },
  {
    "start": 425.82,
    "end": 426.18,
    "type": "Todas."
  },
  {
    "start": 426.44,
    "end": 427.98,
    "type": "Aqu\u00ed hay muchas cosas que ver."
  },
  {
    "start": 428.28,
    "end": 429.52,
    "type": "S\u00ed, bastante."
  },
  {
    "start": 430.0,
    "end": 433.44,
    "type": "Entonces, \u00bfUsted cree que alg\u00fan d\u00eda la podremos"
  },
  {
    "start": 433.44,
    "end": 433.92,
    "type": "conocer?"
  },
  {
    "start": 434.2,
    "end": 434.34,
    "type": "S\u00ed, claro."
  },
  {
    "start": 434.34,
    "end": 434.44,
    "type": "\u00bfS\u00ed?"
  },
  {
    "start": 435.82,
    "end": 435.94,
    "type": "S\u00ed."
  },
  {
    "start": 436.42,
    "end": 437.52,
    "type": "\u00bfY cu\u00e1ndo viene?"
  },
  {
    "start": 438.0,
    "end": 439.16,
    "type": "\u00bfCu\u00e1ndo viene para Cuba?"
  },
  {
    "start": 441.36,
    "end": 443.8,
    "type": "Entonces, me gustar\u00eda muy amable conocerla."
  },
  {
    "start": 444.1,
    "end": 444.52,
    "type": "Ven, s\u00ed."
  },
  {
    "start": 444.64,
    "end": 445.86,
    "type": "Y brindarle mi casa."
  },
  {
    "start": 446.38,
    "end": 448.34,
    "type": "Usted pregunta por la p\u00fablica de las Tres"
  },
  {
    "start": 448.34,
    "end": 449.92,
    "type": "Cruces y ya le van a decir."
  },
  {
    "start": 450.26,
    "end": 450.5,
    "type": "Aj\u00e1."
  },
  {
    "start": 450.88,
    "end": 451.38,
    "type": "Ah, bueno."
  },
  {
    "start": 451.48,
    "end": 452.38,
    "type": "Yo espero que venga."
  },
  {
    "start": 452.88,
    "end": 456.14,
    "type": "Yo espero verla para ense\u00f1arle muchas cosas."
  },
  {
    "start": 456.58,
    "end": 457.0,
    "type": "Ven, s\u00ed."
  },
  {
    "start": 457.36,
    "end": 458.12,
    "type": "Ah, bueno."
  },
  {
    "start": 458.46,
    "end": 459.74,
    "type": "Voy a irme a llamar, que me es"
  },
  {
    "start": 459.74,
    "end": 460.4,
    "type": "muy grato."
  },
  {
    "start": 460.56,
    "end": 462.02,
    "type": "Y la verdad es que fue un placer,"
  },
  {
    "start": 462.16,
    "end": 462.38,
    "type": "mi amor."
  },
  {
    "start": 462.48,
    "end": 463.44,
    "type": "Porque no..."
  },
  {
    "start": 463.44,
    "end": 464.32,
    "type": "Las cosas son muy buenas."
  },
  {
    "start": 470.46,
    "end": 472.56,
    "type": "Me ha gustado mucho hablar con usted."
  },
  {
    "start": 472.74,
    "end": 473.1,
    "type": "Ah, verdad."
  },
  {
    "start": 473.48,
    "end": 474.56,
    "type": "Siga llamando."
  },
  {
    "start": 474.92,
    "end": 475.32,
    "type": "Igualmente."
  },
  {
    "start": 475.62,
    "end": 476.36,
    "type": "Va, mi vida."
  },
  {
    "start": 476.72,
    "end": 477.12,
    "type": "Bueno."
  },
  {
    "start": 477.38,
    "end": 477.82,
    "type": "Bueno, bueno."
  },
  {
    "start": 477.9,
    "end": 478.18,
    "type": "Bueno."
  },
  {
    "start": 478.38,
    "end": 479.56,
    "type": "Bueno, que te vaya muy bien."
  },
  {
    "start": 480.14,
    "end": 480.52,
    "type": "Gracias."
  },
  {
    "start": 480.7,
    "end": 481.36,
    "type": "De nada, mi amor."
  },
  {
    "start": 481.48,
    "end": 482.1,
    "type": "Venga, gracias."
  },
  {
    "start": 482.2,
    "end": 482.62,
    "type": "Por favor."
  },
  {
    "start": 482.86,
    "end": 483.1,
    "type": "Gracias."
  },
  {
    "start": 483.28,
    "end": 483.7,
    "type": "De nada."
  },
  {
    "start": 483.76,
    "end": 484.14,
    "type": "Gracias."
  },
  {
    "start": 484.56,
    "end": 485.88,
    "type": "Que te vaya muy bien."
  },
  {
    "start": 485.9,
    "end": 486.2,
    "type": "S\u00ed, s\u00ed."
  },
  {
    "start": 486.36,
    "end": 486.7,
    "type": "Gracias."
  },
  {
    "start": 486.88,
    "end": 487.26,
    "type": "Venga."
  },
  {
    "start": 487.58,
    "end": 487.96,
    "type": "Por nada."
  },
  {
    "start": 489.86,
    "end": 490.26,
    "type": "Adi\u00f3s."
  },
  {
    "start": 490.42,
    "end": 490.68,
    "type": "Adi\u00f3s."
  },
  {
    "start": 490.88,
    "end": 491.8,
    "type": "Vale, adi\u00f3s."
  },
  {
    "start": 491.82,
    "end": 492.16,
    "type": "Adi\u00f3s."
  },
  {
    "start": 492.22,
    "end": 493.16,
    "type": "Un beso, suerte."
  },
  {
    "start": 493.16,
    "end": 494.32,
    "type": "Chao, chao."
  }
];

export { pulses };