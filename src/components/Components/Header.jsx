import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv className={"pt-20"}>
      <div className="flex items-center gap-6">
        <img
          className="w-20 h-20 rounded-full object-cover object-[25%_75%] "
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2Ffit-in%2F900x510%2Fhttps%3A%2F%2Fwww.forbes.com%2Fadvisor%2Fwp-content%2Fuploads%2F2023%2F07%2Fcomputer-coding.jpg&f=1&nofb=1&ipt=84138113da605b06405c0e671a99cc3850972a8bd00f4bf9aab27fbc34c9f882&ipo=images"
          alt=""
        />

        <div className="">
          <div className="flex items-center gap-2">
            <img
              className="w-4 h-4 invert"
              src="/pin-sharp-circle-624-svgrepo-com.svg"
            />
            <span className="text-sm">Buenos Aires, Argentina</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span className="text-sm">Disponible para nuevos proyectos</span>
          </div>
        </div>
      </div>

      <div className="xl:w-150 mt-6">
        <h1 className="text-3xl lg:text-5xl font-black">Hola, Soy yo 👋</h1>
        <p className="pt-7 font-semibold text-gray-300 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio esse
          asperiores voluptatum earum, deserunt nemo. Magnam iste reiciendis
          labore numquam voluptate quae, aliquam ducimus architecto!
        </p>
      </div>

      <div className="flex items-center gap-3 mt-12">
        <a
          href=""
          className="bg-slate-800 text-gray-200 border-gray-400 flex items-center gap-2 border-[1px] py-1.5 px-3.5 rounded-4xl border-amber-5 0"
        >
          <img
            className="w-content h-4 invert"
            src="/github-142-svgrepo-com.svg"
            alt=""
          />
          <span className="text-sm font-semibold">GitHub</span>
        </a>
        <a
          href=""
          className="bg-slate-800 text-gray-200 border-gray-400 flex items-center gap-2 border-[1px] py-1.5 px-3.5 rounded-4xl border-amber-5 0"
        >
          <img
            className="w-content h-4 invert"
            src="/linkedin-svgrepo-com.svg"
            alt=""
          />
          <span className="text-sm font-semibold">LinkedIn</span>
        </a>
        <a
          href=""
          className="bg-slate-800 text-gray-200 border-gray-400 flex items-center gap-2 border-[1px] py-1.5 px-3.5 rounded-4xl border-amber-5 0"
        >
          <img
            className="w-content h-4 invert"
            src="/twitter-3-svgrepo-com.svg"
            alt=""
          />
          <span className="text-sm font-semibold">Twitter</span>
        </a>
      </div>
    </DefaultDiv>
  );
}
