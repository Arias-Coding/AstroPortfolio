import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv bgColor={""} className={"pt-38"}>
      <div className="flex justify-center">
        <span className="pt-1.5 pb-2 px-4 rounded-4xl border-2 border-cyan-600 text-amber-50 text-sm">
          About Me
        </span>
      </div>

      <div className="mt-25 flex gap-10">
        <div className="relative w-250 items-center">
          <img
            className="w-full h-full object-cover object-[25%_75%]"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2Ffit-in%2F900x510%2Fhttps%3A%2F%2Fwww.forbes.com%2Fadvisor%2Fwp-content%2Fuploads%2F2023%2F07%2Fcomputer-coding.jpg&f=1&nofb=1&ipt=84138113da605b06405c0e671a99cc3850972a8bd00f4bf9aab27fbc34c9f882&ipo=images"
            alt=""
          />
          <div className="w-full h-full border-3 border-indigo-700 absolute -top-3 -left-3 lg:-top-9 lg:-left-9 z-20" />
        </div>

        <div className="">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.
          </h2>
          <p className="mt-7 text-gray-200 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod
            impedit nostrum, ad debitis necessitatibus dicta ipsam soluta,
            doloribus quis ea, libero pariatur facere mollitia consequuntur?
          </p>
          <p className="mt-3 text-gray-200 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod
            impedit nostrum, ad debitis necessitatibus dicta ipsam soluta,
            doloribus quis ea, libero pariatur facere mollitia consequuntur?
          </p>
        </div>
      </div>
    </DefaultDiv>
  );
}
