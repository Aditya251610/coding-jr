import InfoHeading from "./InfoHeading";

const Info = () => {
  return (
    <section className="relative top-0 mx-4 md:mx-[8rem] lg:mx-[14rem] mt-12">
      <div>
        <InfoHeading
          image={
            <img
              decoding="async"
              src="https://framerusercontent.com/images/1TYAjcJ7JY25gPkJrF9J5KQe0.png"
              alt=""
              loading="lazy"
              style={{
                display: "block",
                width: "40px", 
                height: "40px", 
                borderRadius: "inherit",
                objectPosition: "center center",
                objectFit: "contain",
                imageRendering: "auto",
              }}
            />
          }
          heading={
            <h1 className="font-bold mt-4 text-2xl md:text-[40px]">
              AI-first phone call centre.
            </h1>
          }
          content={
            <p className="text-base md:text-xl mt-4 text-[#666766]">
              Your <span className="font-bold">own AI call center</span> works around the clock to support your customers, <span className="font-bold">handle complex issues</span>, and <span className="font-bold">resolve them directly over the phone. </span>
            </p>
          }
        />

        <div className="bg-gradient-to-b from-[#FAFAFA] to-white p-4 rounded-xl mb-8">
          <img
            decoding="async"
            sizes="calc(100vw - 32px)" 
            srcSet="
              https://framerusercontent.com/images/YDc2xQv5wfUSJddptTZOWx0C10.png?scale-down-to=512 512w, 
              https://framerusercontent.com/images/YDc2xQv5wfUSJddptTZOWx0C10.png?scale-down-to=1024 1024w, 
              https://framerusercontent.com/images/YDc2xQv5wfUSJddptTZOWx0C10.png 1920w
            "
            src="https://framerusercontent.com/images/YDc2xQv5wfUSJddptTZOWx0C10.png"
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "auto", 
              borderRadius: "inherit",
              objectPosition: "center center",
              objectFit: "cover",
              imageRendering: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
