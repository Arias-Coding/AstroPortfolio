import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv className={"relative pt-4"}>
      <div className="w-fit mx-auto py-2 px-6 rounded-4xl flex items-center gap-6 text-sm text-gray-200 font-semibold">
        <a
          href=""
          className="hover:text-gray-400 hover:cursor-pointer hover:underline"
        >
          About
        </a>
        <a
          href=""
          className="hover:text-gray-400 hover:cursor-pointer hover:underline"
        >
          Skills
        </a>
        <a
          href=""
          className="hover:text-gray-400 hover:cursor-pointer hover:underline"
        >
          Works
        </a>
      </div>
    </DefaultDiv>
  );
}
