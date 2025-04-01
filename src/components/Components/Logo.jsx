export default function Logo({ Name, ImgLink }) {
  return (
    <div className="text-center">
      <img
        className="w-content h-8 xl:h-12 mx-auto mb-1.5"
        src={ImgLink}
        alt=""
      />
      <span className="text-sm xl:text-xl">{Name}</span>
    </div>
  );
}
