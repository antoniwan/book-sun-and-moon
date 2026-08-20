import coverArt from "../graphics/title-image.avif";
import parkArt from "../graphics/park-play.avif";
import beachArt from "../graphics/beach-play-2.avif";
import schoolArt from "../graphics/school.avif";
import birthdayArt from "../graphics/birthday.avif";
import sunArt from "../graphics/sun.avif";
import shadowArt from "../graphics/shadow-play.avif";
import duskArt from "../graphics/song-night.avif";
import starArt from "../graphics/colorful-sky.avif";
import moonArt from "../graphics/more-night-sky.avif";
import bedtimeArt from "../graphics/night-moon-girl.avif";

export const BOOK = {
  author: {
    en: "Antonio Rodriguez Martinez",
    es: "Antonio Rodríguez Martínez",
  },
  title: {
    en: "Mia, the Sun, and the Moon",
    es: "Mia, el Sol y la Luna",
  },
  shortTitle: {
    en: "Mia, the Sun, and the Moon",
    es: "Mia, el Sol y la Luna",
  },
  dedication: {
    en: "For Mia and Dario, with all my love",
    es: "Para Mia y Dario, con todo mi amor",
  },
  credit: {
    en: "Written, designed, and built with love for my daughter and nephew.",
    es: "Escrito, diseñado y programado con mucho amor para mi hija y mi sobrino.",
  },
  portfolioUrl: "https://antonio.builds.software",
};

export const SITE_URL = "https://book-sun-and-moon.vercel.app";
export const SITE_IMAGE = `${SITE_URL}/share-image.png`;

export const SEO = {
  defaultTitle: "Mia, the Sun, and the Moon | Mia, el Sol y la Luna",
  title: {
    en: "Mia, the Sun, and the Moon | Antonio Rodriguez Martinez",
    es: "Mia, el Sol y la Luna | Antonio Rodríguez Martínez",
  },
  description: {
    en: "Children's e-book in English and Spanish by Antonio Rodriguez Martinez. Mia, the Sun, and the Moon / Mia, el Sol y la Luna.",
    es: "Libro infantil en inglés y español de Antonio Rodríguez Martínez. Mia, el Sol y la Luna / Mia, the Sun, and the Moon.",
  },
  locale: {
    en: "en_US",
    es: "es_419",
  },
  imageAlt: {
    en: "Cover illustration for Mia, the Sun, and the Moon",
    es: "Ilustración de portada de Mia, el Sol y la Luna",
  },
};

export const PAGES = [
  {
    id: "cover",
    type: "cover",
    theme: "dawn",
    image: coverArt,
    alt: {
      en: "A young girl with long brown hair and a pale dress stands in a meadow of yellow flowers at sunset, looking toward the glowing sun.",
      es: "Una niña de cabello castaño largo y un vestido claro está en un prado de flores amarillas al atardecer, mirando hacia el sol.",
    },
  },
  {
    id: "park",
    type: "story",
    theme: "day",
    image: parkArt,
    alt: {
      en: "Mia, a smiling girl with long brown hair and a golden jumper, runs through a sunny park while other children play behind her.",
      es: "Mia, una niña sonriente de cabello castaño largo y una jardinera dorada, corre por un parque soleado mientras otros niños juegan detrás de ella.",
    },
    body: {
      en: [
        "Every day, the sun says hi and shines so bright. The sun makes Mia's brown eyes squint — but she always smiles.",
        "Off she goes, running to play in the park! Each new sun is a new day of life, fun, and smiles.",
      ],
      es: [
        "Cada día, el Sol dice hola y brilla con mucha calidez. El sol a veces hace que los ojos marrones de Mia se encojan un poquito, pero siempre la hace sonreír.",
        "¡Ahí se va corriendo a jugar al parque! Cada nuevo sol es un nuevo día de vida, diversión y sonrisas.",
      ],
    },
  },
  {
    id: "beach",
    type: "story",
    theme: "day",
    image: beachArt,
    alt: {
      en: "A woman and two small children walk along a golden beach toward turquoise water, with green mountains and tall clouds in the distance.",
      es: "Una mujer y dos niños pequeños caminan por una playa dorada hacia un mar turquesa, con montañas verdes y nubes altas a lo lejos.",
    },
    body: {
      en: [
        "Every day, the sun says hi and shines so warmly. The sun makes Mia's skin warm.",
        "Today is different. She won't go to the park — she'll go to the beach instead, and play in the sand. This day is extra special because her cousin Dario joins in the fun.",
      ],
      es: [
        "Cada día, el Sol dice hola y brilla con mucha calidez. El sol hace que la piel de Mia se ponga calentita.",
        "Hoy es un día diferente: Mia no va al parque porque se va para la playa a jugar en la arena. El día también es especial, pues su primo Dario la acompaña en la diversión.",
      ],
    },
  },
  {
    id: "school",
    type: "story",
    theme: "day",
    image: schoolArt,
    alt: {
      en: "Mia sits in a sunlit forest with her teacher and two friends, gathered in a circle to learn and play.",
      es: "Mia está sentada en un bosque lleno de sol con su maestra y dos amigos, reunidos en un círculo para aprender y jugar.",
    },
    body: {
      en: [
        "It's another day, and the sun says hi again. Mia notices that the sun will always be there for her.",
        "Today is a school day, and Mia is off to learn and grow with her favorite teacher and friends.",
      ],
      es: [
        "Hoy es otro día, y el sol dice hola y brilla nuevamente. Mia se da cuenta de que el sol siempre estará ahí para ella durante el día.",
        "Hoy hay escuela, y Mia se va a aprender y crecer con su maestra, y unos amigos y compañeros de clase.",
      ],
    },
  },
  {
    id: "birthday",
    type: "story",
    theme: "party",
    image: birthdayArt,
    alt: {
      en: "Mia in a pink polka-dot dress smiles beside a birthday cake with candles, surrounded by friends, balloons, and confetti.",
      es: "Mia, con un vestido rosado de lunares, sonríe junto a un bizcocho de cumpleaños con velas, rodeada de amistades, globos y confeti.",
    },
    body: {
      en: [
        "So many days have passed that Mia is now four years old, growing up brave and joyful. A whole year of the sun and her moon has gone by.",
        "Mia celebrated her birthday with family and friends — a new year of life. And the cake was very yummy.",
      ],
      es: [
        "Un año completo del ciclo de día y noche, del baile del sol y la luna, ha pasado. Son muchos días, y Mia ahora cumplió 4 años.",
        "Mia tuvo una celebración de cumpleaños junto a sus familiares y amigos para apreciar un nuevo año de vida. El bizcocho estaba muy delicioso.",
      ],
    },
  },
  {
    id: "thank-you-sun",
    type: "story",
    theme: "day",
    image: sunArt,
    alt: {
      en: "A bright, warm sun fills the sky with golden light.",
      es: "Un sol brillante y cálido llena el cielo de luz dorada.",
    },
    body: {
      en: [
        "As another day goes by, whenever Mia feels the sunshine on her skin, her smile shines. She looks up into the sky with a big, bright smile and calls out,",
        { quote: "Hi, Sun! Thank you for the warmth and the light. So fun!" },
      ],
      es: [
        "Hoy es otro día nuevo, y cuando Mia siente la luz del sol en su piel, su sonrisa brilla y grita:",
        { quote: "¡Hola, Sol! ¡Gracias por el calorcito y por la luz! ¡Qué diversión!" },
      ],
    },
  },
  {
    id: "shadows",
    type: "story",
    theme: "dusk",
    image: shadowArt,
    alt: {
      en: "Three children play on a tree-lined path at sunset, their long shadows stretching across the ground.",
      es: "Tres niños juegan en un camino rodeado de árboles al atardecer, con sus sombras alargadas sobre el suelo.",
    },
    body: {
      en: [
        "As the hours of each day go by, the sun moves across the sky and makes many shadows for our brave and joyful girl and her friends to play in.",
        { quote: "The sun also plays with us!" },
        "Mia explains excitedly.",
      ],
      es: [
        "Las horas de cada día pasan, y el sol a su vez va pasando y moviéndose, creando muchas sombras para que nuestra niña valiente y alegre y sus amigos disfruten. Ellos inventan juegos con las sombras y su oscuridad.",
        { quote: "El sol también quiere jugar con nosotros." },
        "Mia le explica a sus amigos.",
      ],
    },
  },
  {
    id: "goodbye-sun",
    type: "story",
    theme: "dusk",
    image: duskArt,
    alt: {
      en: "Mia sits close to a loved one by a quiet river at dusk, watching the last light of day and the first stars.",
      es: "Mia está sentada cerca de un ser querido junto a un río quieto al anochecer, mirando la última luz del día y las primeras estrellas.",
    },
    body: {
      en: [
        "Nighttime is nearby. It's time to say goodbye to the sunshine and the daylight — but Mia rejoices, because the moon is about to shine.",
        { quote: "🎶 Hi! Hello! Good day, good night, good night, good day! 🎶" },
        "A song that Mia made up for the moon!",
      ],
      es: [
        "La noche se acerca y es momento de decirle adiós a la luz del sol y al día, pero Mia agradece que la hermosa luna está a punto de brillar.",
        { quote: "🎶 ¡Hola! ¡Hello! ¡Buen día, buenas noches, buenas noches, buen día! 🎶" },
        "Mia se inventó esta canción y se la cantaba a la luna.",
      ],
    },
  },
  {
    id: "stars",
    type: "story",
    theme: "night",
    image: starArt,
    alt: {
      en: "A vast night sky filled with colorful stars, clouds, and a glowing horizon over distant mountains.",
      es: "Un cielo nocturno inmenso, lleno de estrellas de colores, nubes y un horizonte brillante sobre montañas lejanas.",
    },
    body: {
      en: [
        "The nighttime is so full of stars! Mia has a little while to explore the night sky, and her imagination goes wild!",
      ],
      es: [
        "¡El cielo de la noche tiene tantas estrellas! Mia tiene un poco de tiempo antes de dormir para explorar el cielo de la noche. ¡Su imaginación salta con curiosidad!",
      ],
    },
  },
  {
    id: "moon-phases",
    type: "story",
    theme: "night",
    image: moonArt,
    captionSize: "wide",
    alt: {
      en: "A child stands by a still lake at twilight, looking up at an enormous golden moon.",
      es: "Un niño está de pie junto a un lago quieto al crepúsculo, mirando una luna dorada enorme.",
    },
    body: {
      en: [
        "Mia thinks the moon has many faces, because it looks different every night. What a curious girl!",
        "Mia's parents explain that the moon is a little like us. We have many sides, too. We are family, friends, and workers. Sometimes we are sick, and sometimes we are happy. Sometimes we hide or play in the shadows; sometimes we bask in the sun. Sometimes we are parents; sometimes we are daughters and sons. Sometimes we are awake, and other times we are asleep. Sometimes we are there, and sometimes we must go away.",
        "We always have many different sides and phases. Just like the moon, our lives are ever-changing.",
        "Mia giggles, finding some kind of humor in this explanation.",
      ],
      es: [
        "Mia piensa que la luna tiene muchas caras porque se ve diferente cada noche. ¡Qué curiosidad!",
        "Los padres de Mia le explican que la luna es similar a nosotros: las personas también tenemos muchos lados y dimensiones. Somos familia, amigos, trabajadores. Algunos estamos durmiendo, mientras otros andan despiertos. A veces nos enfermamos; a veces estamos felices. A veces nos escondemos y jugamos en las sombras, y a veces nos recostamos a alimentarnos de la luz del sol. A veces somos padres, y a veces solo somos hijos e hijas. A veces estamos, y en otras ocasiones no podemos estar del todo.",
        "Todos tenemos diferentes lados y fases, diferentes momentos. Como la luna, nuestras vidas son cambio constante.",
        "A Mia esta reflexión le produce unas carcajadas; al parecer recordó o creó algún tipo de humor.",
      ],
    },
  },
  {
    id: "bedtime",
    type: "ending",
    theme: "night",
    image: bedtimeArt,
    alt: {
      en: "Mia sits up in bed holding a stuffed animal, with a round moon shining through her bedroom window.",
      es: "Mia está sentada en la cama abrazando un peluche, con una luna redonda brillando a través de la ventana de su cuarto.",
    },
    body: {
      en: [
        { quote: "It's time for bed," },
        "said Mia, with the moonlight glowing on her face, so happy that tomorrow is another day.",
        { quote: "Good night, moon!" },
      ],
      es: [
        { quote: "Es hora de dormir," },
        "dijo Mia, con la luz de la luna tocándole la carita, feliz de que mañana será otro día y verá al sol.",
        { quote: "¡Buenas noches, Luna!" },
      ],
    },
    closing: {
      en: "The End",
      es: "Fin",
    },
  },
];

export const LAST_STORY_INDEX = PAGES.length - 1;

export function pagePlainText(page, language) {
  if (page.type === "cover") {
    return [BOOK.title[language], BOOK.dedication[language]]
      .filter(Boolean)
      .join(". ");
  }

  const parts = page.body[language].map((block) =>
    typeof block === "string" ? block : block.quote
  );

  if (page.closing) {
    parts.push(page.closing[language]);
  }

  return parts.join(" ");
}
