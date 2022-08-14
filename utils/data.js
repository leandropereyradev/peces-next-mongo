const data = {
  fishes: [
    {
      nombre: "Betta Splendens",
      slug: "betta-splendens",
      imagen: "/images/betta.jpg",

      //Parámetros del agua
      ph: "6,5 - 7,5",
      gh: "4 - 12",
      kh: "3 - 7",
      longitud: "Entre 4,5 y 10cm",

      //Descripción
      descripcion:
        "El betta es un pez de agua dulce procedente del Sudeste de Asia, concretamente de Tailandia, Camboya, Surinam y Laos, donde habitan en campos de arroz y pequeños remansos y zonas de agua estancada con una escasa presencia de oxígeno.",
      dimorfismo:
        "La principal diferencia de machos y hembras betta son las aletas. Los primeros cuentan con largas y exhuberantes aletas, mientras que las hembras presentan aletas más acortas y acordes al tamaño de su cuerpo.",
      alimentacion:
        "Los bettas son peces omnívoros que requieren de un alto contenido proteico para tener un correcto crecimiento y desarrollo.",
      compatibilidad: "Barbo cereza, Ancistrus, Loricáridos, Botia, Danio, Chupaalgas chino, Corydora, Khulis, Mollys, Patys, Rasboras",
    },
    {
      nombre: "Ramirezi",
      slug: "ramirezi",
      imagen: "/images/ramirezi.jpg",

      //Parámetros del agua
      temperatura: "26º - 30º",
      ph: "6 - 7",
      gh: "3 - 10",
      kh: "2 - 4",
      longitud: "7cm",

      //Descripción
      descripcion:
        "El pez Ramirezi (Microgeophagus Ramirezi), pertenece a la familia de los Cíclidos sudamericanos. En la familia de los Cíclidos que abarca más de 900 especies, tenemos peces de gran tamaño. Sin embargo, el pez Ramirezi es un Cíclido enano (Cíclido Enano de Ramirez) que no suele sobrepasar los 7 centímetros.",
      dimorfismo:
        "En cautividad el pez Ramirezi no suele sobrepasar los 7 centímetros de longitud en los machos, las hembras suelen ser un poco más pequeñas. Otro dimorfismo sexual, es que los machos poseen aletas más extendidas y colores más intensos. Las hembras, además, poseen una mancha rosada en el vientre, ausente en los machos.",
      alimentacion:
        "Para lograr sacar los mejores colores, deberemos tratar de variar al máximo la dieta de nuestros Ramirezis. Sobre todo, con alimentos vivos o, en su defecto, congelado: artemia, larvas de mosquito, dafnia, tubifex, etc. Junto a esto, podremos hacer uso de alimentos comerciales, ya sea en granulo como en escama. También, como en la gran mayoría de las especies de acuario que mantenemos, es aconsejable y necesario cierto aporte vegetal para evitar posibles problemas intestinales por un continuo consumo de alimento proteico en su gran mayoría.",
      compatibilidad: "Sin restricciones",
    },
    {
      nombre: "Ancistrus",
      slug: "ancistrus",
      imagen: "/images/ancistrus.jpg",

      //Parámetros del agua
      temperatura: "23º - 27º",
      ph: "6 - 7",
      gh: "2 - 10",
      kh: "2 - 6",
      longitud: "15cm",

      //Descripción
      descripcion:
        "El Ancistrus dolichopterus, es también conocido por otros nombres, como Ancistrus moteado, Ancistrus copo de nieve o Pez gato de hocico barbado. Se trata de un pez de la familia de los Loricáridos, peces muy tranquilos y que pueden compartir espacio con muchas especies de peces diferentes, incluso con aquellas de tamaño mayor que ellos. Tradicionalmente, se suelen incluir Loricáridos (y el Ancistrus Dolichopterus) para el mantenimiento del acuario, debido a que son muy efectivos manteniendo las algas a raya. Eso no significa que no tengamos que realizar ningún tipo de mantenimiento, ni limpieza en el acuario.",
      dimorfismo:
        "Diferenciar machos y hembras de ancistrus es muy sencillo. El macho presenta unos barbillones o tentáculos encima del hocico, llamados odontoides. Por otro lado, las hembras no presentan los tentáculos en la cabeza sino que, en el caso de que los tengan, se encontrarán en el borde del hocico y serán de un tamaño muchísimo menor que en el caso de los machos.",
      alimentacion:
        "A  pesar de que podemos alimentarlo sin problema con pastillas de fondo comerciales, nosotros recomendamos una variada y sencilla dieta de frutas y verduras que harán que nuestro pez crezca mucho más sano y con un color espléndido.",
      compatibilidad:
        "No es agresivo, es terriorial, y a pesar de esto, es totalmente compatible con el resto de especies (siempre y cuando compartan los mismos parámetros).",
    },
    {
      nombre: "Scalare",
      slug: "scalare",
      imagen: "/images/scalare.jpg",

      //Parámetros del agua
      temperatura: "24º - 30º",
      ph: "6 - 7.4",
      gh: "-10",
      kh: "2.3",
      longitud: "15 a 20cm",

      //Descripción
      descripcion:
        "Es un pez muy original en su morfología, del que hay una gran variedad de colores. Podemos encontrar peces Ángel de color negro, dorados, koi o el color estándar, que es el plata. Son muy apreciados, porque poseen un comportamiento muy pacífico. Cuando son jóvenes se comportan de forma gregaria, viven en pequeños grupos, pero cuando son adultos buscan una pareja a la que son fieles durante toda su vida.",
      dimorfismo:
        "El pez Ángel macho posee un bulto pronunciado en la frente, mientras que la hembra carece de esa protuberancia. En el pez Escalar macho se puede encontrar una cresta en el comienzo de su aleta dorsal. Otras fuentes afirman que los machos presentan una menor diferencia entre la aleta ventral y la anal, que las hembras del pez Ángel.",
      alimentacion:
        "Son omnívoros. En libertad se alimentan de pequeños crustáceos e invertebrados acuáticos, aunque en cautividad aceptarán de buen grado de alimento seco preparado, al que debemos complementar con alimentos vivos o congelados, como artemia, dafnia, gusanos tubifex.",
      compatibilidad:
        "Como ya se ha mencionado en apartados anteriores, el escalar es un pez territorial y gregario, por lo que debe estar en cardumen y en acuarios grandes. Deberemos tener especial cuidado de que ninguno de sus acompañantes sea tan pequeño que entre en la boca de nuestros escalares. De ser así, no dudarán en devorarlos.",
    },
    {
      nombre: "Discus",
      slug: "discus",
      imagen: "/images/discus.jpg",

      //Parámetros del agua
      temperatura: "25º - 30º",
      ph: "5.5 - 6.5",
      gh: "0",
      kh: "0",
      longitud: "15 a 30cm",

      //Descripción
      descripcion:
        "El pez Disco (Symphysodon discus) es un Cíclido originario de la selva amazónica. Su tamaño es variable y según algunas fuentes consultadas, no sobrepasa los 15 centímetros en acuario, mientras que es posible encontrar ejemplares en libertad de 20 o 30 centímetros. Lo que si es muy característico, son sus bandas negras que recorren todo su cuerpo en sentido vertical, que no se muestra idéntica en todas las coloraciones.",
      dimorfismo:
        "Poseen una elongación al final de la aleta dorsal. Durante la cría es posible observar las diferencias en los órganos sexuales, mientras las hembras presentan un tubo ovopositor redondeado entre las aletas ventrales y la anal, los machos poseen un espermiducto acabado en punta.",
      alimentacion:
        "Su dieta se puede definir como omnívora, ligeramente carnívora. Para comer es igualmente delicado. Debemos proveerle una dieta a base de gusanos, dafnias y lombrices. También suelen aceptar trozos pequeños de corazón de buey y presas liofilizadas.",
      compatibilidad: "Corydora, Scalare, Ancistrus, Botia payaso, Gurami, Pleco",
    },
    {
      nombre: "Tetra Cardenal",
      slug: "tetra-cardenal",
      imagen: "/images/tetra-cardenal.jpg",

      //Parámetros del agua
      temperatura: "23º - 27º",
      ph: "4.6 - 7",
      gh: "3 - 6",
      kh: "0",
      longitud: "5cm",

      //Descripción
      descripcion:
        "El Pez Cardenal o Tetra Cardenal es una especie de pez que pertenece a la familia de los Carácidos, de manera que está emparentado con las pirañas, aunque no tiene ni mucho menos su agresividad, y también está emparentado con el Tetra Neón. Esta especie fue descubierta y descrita por Myers y Weitzman en 1.956. A pesar del tiempo que ha pasado desde entonces, sigue siendo una de las especies de peces de agua dulce más espectaculares que podemos criar. Son peces de un temperamento vivo, activos nadadores, que gustan de espacios suficientes para moverse. Una apuesta divertida y segura para cualquier acuario.",
      dimorfismo:
        "El pez Ángel macho posee un bulto pronunciado en la frente, mientras que la hembra carece de esa protuberancia. En el pez Escalar macho se puede encontrar una cresta en el comienzo de su aleta dorsal. Otras fuentes afirman que los machos presentan una menor diferencia entre la aleta ventral y la anal, que las hembras del pez Ángel.",
      alimentacion:
        "Son peces con apetito voraz, que aceptarán todo tipo de alimentos de pequeño tamaño. En la naturaleza comerán todo tipo de pequeños invertebrados, crustáceos, algas y frutos caídos de los árboles. En el acuario podemos intentar imitar esta alimentación aportándole alimento vivo a base de artemias, larvas de mosquitos, daphnias, aunque también aceptará de buen grado cualquier tipo de alimento seco para peces tropicales.",
      compatibilidad:
        "Botia Payaso, Guppy, Corydoras, Ramirezi, Ancistrus, Pez Monjita, Pez Cebra, Betta hembra, Pez Arlequín, Gurami Perla, Pez Hacha, Barbo Tigre, Guppy Endler, Pez Platy.",
    },
    {
      nombre: "Colisa Lalia",
      slug: "colisa-lalia",
      imagen: "/images/colisa-lalia.jpg",

      //Parámetros del agua
      temperatura: "26º - 28º",
      ph: "6 - 8",
      gh: "3 - 6",
      kh: "0",
      longitud: "5 a 7cm",

      //Descripción
      descripcion:
        "La colisa lalia, también es conocido en acuariofilia como el gurami enano. Pertenece a la familia de los belóntidos, como el betta o el gurami perla. Es un pez bastante pacífico, reservado y tímido, por lo que pasa gran parte del tiempo escondido entre plantas o adornos del acuario. Como la mayoría de los belóntidos, es omnívoro, con origen las regiones orientales de la India, como muchas otras variedades de peces. Es perfecto para mantenerlo en un acuario comunitario, siempre que el resto de especies con las que comparta espacio también sean relativamente tranquilas.",
      dimorfismo:
        "La hembra es más pequeña que el macho, con colores más apagados y en tonos pardos. En el macho la aleta anal tiene una terminación puntiaguda, las aletas en la hembra son sensiblemente más cortas. Las típicas franjas que recorren su cuerpo, suelen ser más largas en el macho que en los especímenes del sexo opuesto.",
      alimentacion:
        "Los peces colisa en sus distintas variedades no generan problemas a la hora de la alimentación, son peces omnívoros bien adaptados a consumir alimento comercial, como las escamas, aunque también pueden comer alimento vivo sin ningún problema, además, ayudarán a desarrollar una mejor coloración y estado de salud en general.",
      compatibilidad:
        "Botia Payaso, Guppy, Corydoras, Ramirezi, Ancistrus, Pez Monjita, Pez Cebra, Betta, Pez Arlequín, Gurami Perla, Pez Hacha, Barbo Cereza, Guppy, Pez Platy, Killi, Cola de Espada, Molly.",
    },
    {
      nombre: "Killi",
      slug: "killi",
      imagen: "/images/killi.jpg",

      //Parámetros del agua
      temperatura: "18º - 26º",
      ph: "5.5 - 7",
      gh: "10",
      kh: "5.8",
      longitud: "3 a 7cm",

      //Descripción
      descripcion:
        "Cuando hablamos de pez Killi, peces Killis o Killisfish, no estamos hablando de un pez, hablamos de una familia de peces, en concreto hablamos de los Cyprinodontiformes ovíparos, dejando de lado los Cyprinodontiformes vivíparos, los famosos Mollies, Platys o Guppys. Los Killis producen huevos capaces de resistir épocas de sequía de hasta dos años, incluso más en algunas especies. Esta particularidad, puede explicar también el fenómeno Killisfish, ya que los amantes de estos peces, pueden intercambiarse huevos con un simple paquete postal.",
      dimorfismo:
        "El diformismo sexual (diferencia entre machos y hembras) es notable, sobre todo en el tamaño y en el color. Los machos son más grandes que las hembras y lucen colores fuertes y brillantes, mientras que ellas, de menor tamaño, lucen colores más pálidos y apagados.",
      alimentacion:
        "Son peces que se alimentan casi de forma exclusiva de presas vivas en estado salvaje, pero en el acuario admiten no sólo presas vivas, también se les puede alimentar con productos congelados, como larva roja o artemia. Algunos aficionados, incluyen en su dieta hígado de pollo muy troceado, que suele ser de su agrado. Hay que tener cuidado, y el alimento sobrante, se debe retirar para evitar problemas y enfermedades.",
      compatibilidad:
        "La mayoría de las especies de Killis son anuales, o sea que sólo viven un año. Cuando son alevines y muy pequeños, son sociables y no tienen ningún problema en compartir espacio con otros ejemplares. A medida que su reloj biológico se activa, algunas especies se vuelven más agresivas, intentan garantizar su supervivencia y la de la especie. Al llegar la época de freza, los machos intentarán proteger su territorio de otros congéneres, se vuelven más agresivos.",
    },
    {
      nombre: "Guppy",
      slug: "guppy",
      imagen: "/images/guppy.jpg",

      //Parámetros del agua
      temperatura: "22º - 28º",
      ph: "7.5 - 8.5",
      gh: "10 - 20",
      kh: "14 - 18",
      longitud: "4 a 6cm",

      //Descripción
      descripcion:
        "El Pez Guppy pertenece a la familia de los Poecílidos, que a su vez se encuadra dentro del grupo de los Cyprinodontiformes. Dentro de los peces de acuario de agua dulce probablemente sean de los más populares, hay cuatro razones básicas para su popularidad:\nSon peces muy fáciles de cuidar, aptos para los acuriófilos más novatos.\nPoseen una paleta de colores atractiva, y una aleta caudal muy llamativa y distintiva, que puede variar de unos ejemplares a otros, pero que siempre genera atención por su enorme belleza.\nSon muy resistentes, son capaces de aguantar los errores más típicos de los novatos.\nSe reproducen con facilidad. Conseguir reproducir peces dentro del acuario, siempre es una gran satisfacción.",
      dimorfismo:
        "Los machos son de menor tamaño comparados con las hembras (entre 3 a 4 centímetros) y tienen una variedad mayor de colores. Otra característica diferenciadora, es que poseen una modificación de la aleta anal denominado gonopodio, que es su órgano sexual, situado en la parte posterior del pez y que tiene una forma similar a un palo. En el pez Guppy las hembras son más grandes (unos 6 centímetros), voluminosas y de coloración opaca. En las especies criadas en cautividad y seleccionadas para acuario, la aleta caudal tiene una coloración más intensa.",
      alimentacion:
        "Aunque en libertad se alimentan básicamente de insectos, sobre todo las larvas de mosquito rojo, los criados en cautividad admiten una gran variedad de alimentos.",
      compatibilidad:
        "Los Guppy son peces tranquilos pero muy activos. No se les debe colocar junto a especies que tengan colas muy vistosas, irremediablemente les llamará la atención y las morderán. Mejor peces de tamaño similar y que no tengan colas demasiado grandes y llamativas. Entre los peces compatibles con Guppys, podemos citar a los Mollies, Tetras, Arlequines, Rasboras, micro Rasboras y peces de fondo. En el acuario el macho suele acosar de forma constante a las hembras, para evitar este tipo de situación agobiante, se recomienda tener un macho por cada tres hembras.",
    },
  ],
};

export default data;
