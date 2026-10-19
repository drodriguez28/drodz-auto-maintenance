function ServiceAreaMap({ imageSrc = "/images/metro-atl.png", altText = "Metro Atlanta Service Area", title = "Where We Operate" }) {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      <div className="flex justify-center bg-stone-400 rounded shadow-lg p-4">
        <img src={imageSrc} alt={altText} className="max-w-2xl w-full rounded" />
      </div>
    </div>
  );
}

export default ServiceAreaMap;