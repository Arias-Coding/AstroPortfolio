
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
          <span className="flex items-center gap-2 border-[1px] py-1 px-2 rounded-4xl border-amber-5 0">
            <img
              className="w-content h-4 invert"
              src="/github-142-svgrepo-com.svg"
              alt=""
            />
            <span className="text-sm">GitHub</span>
          </span>
          <span className="flex items-center gap-2 border-[1px] py-1 px-2 rounded-4xl border-amber-5 0">
            <img
              className="w-content h-4 invert"
              src="/github-142-svgrepo-com.svg"
              alt=""
            />
            <span className="text-sm">GitHub</span>
          </span>
        </div>

        <p className="mt-3 text-gray-300">
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
            src="/twitter-3-svgrepo-com.svg"
            alt=""
          />
          <span className="text-sm font-semibold">Twitter</span>
        </a>
        <a
          href=""
          className="bg-slate-800 text-gray-200 border-gray-400 flex items-center gap-2 border-[1px] py-2 px-4 rounded-xl border-amber-5 0"
        >
          <img
            className="w-content h-4 invert"
            src="/twitter-3-svgrepo-com.svg"
            alt=""
          />
          <span className="text-sm font-semibold">Twitter</span>
        </a>
        </div>
      </div>
    </div>
  );
}
