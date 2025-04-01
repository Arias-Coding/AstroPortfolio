import DefaultDiv from "./defaultDiv";
import Work from "./Work";

export default function App() {
  return (
    <div className="flex gap-8 justify-center items-center">
      <img
        className="w-120 rounded-2xl"
        src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f266ebed4a1ad86708140cef61e5710615a14e99/933a9266418b1ad3bf4da961e84641edc72c4a85"
        alt=""
      />
      <div className="w-110">
        <h3 className="font-bold text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </h3>

        <div className="flex gap-2 mt-3">
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

        <p className="mt-2 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          consequatur, sint corporis, soluta iusto distinctio ipsa at deserunt
          consectetur architecto dolor.
        </p>

        <div className="flex gap-2 mt-3">
          <a
            href=""
            className="bg-slate-600 text-gray-100 flex items-center gap-2 border-[1px] py-2 px-3 rounded-2xl border-amber-5 0"
          >
            <img
              className="w-content h-5 invert"
              src="/github-142-svgrepo-com.svg"
              alt=""
            />
            <span className="text-lg">GitHub</span>
          </a>
          <a
            href=""
            className="bg-slate-600 text-gray-100 flex items-center gap-2 border-[1px] py-2 px-3 rounded-2xl border-amber-5 0"
          >
            <img
              className="w-content h-5 invert"
              src="/github-142-svgrepo-com.svg"
              alt=""
            />
            <span className="text-lg">Preview</span>
          </a>
        </div>
      </div>
    </div>
  );
}
