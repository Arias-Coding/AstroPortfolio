import DefaultDiv from "./defaultDiv";
import Work from "./Work";

export default function App() {
  return (
    <DefaultDiv bgColor={""} className={"pt-22 lg:pt-38"}>
      <div className="flex justify-center">
        <span className="py-2 px-4 rounded-4xl border-2 border-cyan-600 text-amber-50 text-sm">
          Works
        </span>
      </div>

      <div className="mt-12 lg:mt-25 flex flex-col gap-20 lg:gap-34">
        <Work />
        <Work />
        <Work />
      </div>
    </DefaultDiv>
  );
}
