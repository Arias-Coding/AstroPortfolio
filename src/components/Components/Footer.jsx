import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv bgColor={""} className={"pt-35 lg:pt-60 pb-26"}>
      <h3 className="text-2xl lg:text-3xl font-bold">Contact Me</h3>
      <p className="text-md text-gray-400 2xl:w-145 mt-7">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nisi
        veritatis consectetur, odit molestiae repellat saepe error pariatur
        excepturi aut animi repellendus, fugiat nemo et quaerat alias,
        blanditiis itaque laudantium enim fugit?
      </p>
      <p className="mt-7 text-gray-100">randomemail@gmail.com</p>

    </DefaultDiv>
  );
}
