import welcomeGraphic from "../graphics/title-image.avif";

export default function TitlePage({ language }) {
  return (
    <div className="">
      <h2 className="fixed top-2 md:top-12 left-0 md:left-8 text-5xl md:text-8xl w-full p-5 drop-shadow-md text-stone-900">
        {language === "en"
          ? "Mia, the Sun, and the Moon"
          : "Mia, el Sol, y la Luna"}
      </h2>

      <div className="">
        <img
          className="h-screen w-screen object-cover"
          src={welcomeGraphic}
          alt="Mia' is a happy and brave 4-year old girl who is dressed in a pink dress."
        ></img>
      </div>
    </div>
  );
}
