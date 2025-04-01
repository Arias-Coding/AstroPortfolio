
export default function App() {
  return (
    <div className="flex flex-wrap gap-7 items-center">
      <div className="basis-5/12 flex-grow">
        <img
          className="w-full rounded-2xl"
          src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f266ebed4a1ad86708140cef61e5710615a14e99/933a9266418b1ad3bf4da961e84641edc72c4a85"
          alt=""
        />
      </div>

      <div className="basis-6/12 flex-grow">
        <h3 className="font-semibold text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </h3>

        <div className="flex gap-2 mt-4">
          <span className="flex items-center gap-2 border-[1px] py-1 px-3 rounded-full border-gray-600">
            <img
              className="w-content h-4"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F59144946%2F276976456-4a5e1cbc-2d4e-439f-875b-8fb4bdc8c15e.png&f=1&nofb=1&ipt=298196e2b3f7eb7999438f63309eba9b3f2bc861e87566d60b795de7d2b36744&ipo=images"
              alt=""
            />
            <span className="text-sm">Astro</span>
          </span>
          <span className="flex items-center gap-2 border-[1px] py-1 px-3 rounded-full border-gray-600">
            <img
              className="w-content h-4"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Ftypescript%2Ftypescript-4096.png&f=1&nofb=1&ipt=ef03cd1b45f2eef5da9995b803bbd5c77b75e893450c3922ff665d58a4be6c0a"
              alt=""
            />
            <span className="text-sm">Typescript</span>
          </span>
        </div>

        <p className="mt-3 text-gray-300 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          consequatur, sint corporis, soluta iusto distinctio ipsa at deserunt
          consectetur architecto dolor.
        </p>

        <div className="flex gap-2 mt-4">
        <a
          href=""
          className="bg-slate-800 text-gray-200 border-gray-400 flex items-center gap-2 border-[1px] py-2 px-4 rounded-xl border-amber-5 0"
        >
          <img
            className="w-content h-4 invert"
            src="http://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F129748%2Fisolated%2Fpreview%2F29d0ea34158402c1581b9ec6214ad95c-icono-de-pieza-de-cadena-by-vexels.png&f=1&nofb=1&ipt=eb5759f46149052fa2ae374ef00c613fe69201edb237b44642a511e2f26a737b"
            alt=""
          />
          <span className="text-sm font-semibold">Web</span>
        </a>
        <a
          href=""
          className="bg-slate-800 text-gray-200 border-gray-400 flex items-center gap-2 border-[1px] py-2 px-4 rounded-xl border-amber-5 0"
        >
          <img
            className="w-content h-4 invert"
            src="/github-142-svgrepo-com.svg"
            alt=""
          />
          <span className="text-sm font-semibold">Codigo</span>
        </a>
        </div>
      </div>
    </div>
  );
}
