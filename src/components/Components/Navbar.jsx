import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv className={"relative pt-4"}>
      <div className="w-fit mx-auto py-2 sm:px-6 rounded-4xl flex items-center  sm:gap-6 text-sm text-gray-200 font-semibold flex-wrap">
        <a class="p-1 px-4 group relative overflow-hidden" href="#">
          <span class="">Sobre Mi</span>
          <div class="absolute -left-[100%] bottom-0 bg-cyan-500 h-[2px] w-full transition-all duration-500 group-hover:-left-[0%]"></div>
        </a>
        <a class="p-1 px-4 group relative overflow-hidden" href="#">
          <span class="">Habilidades</span>
          <div class="absolute -left-[100%] bottom-0 bg-cyan-500 h-[2px] w-full transition-all duration-500 group-hover:-left-[0%]"></div>
        </a>
        <a class="p-1 px-4 group relative overflow-hidden" href="#">
          <span class="">Trabajos</span>
          <div class="absolute -left-[100%] bottom-0 bg-cyan-500 h-[2px] w-full transition-all duration-500 group-hover:-left-[0%]"></div>
        </a>
      </div>
    </DefaultDiv>
  );
}
