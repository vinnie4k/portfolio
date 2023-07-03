function Callout(calloutProp: CalloutProp) {
  return (
    <div className="flex flex-row gap-4 items-center py-4 px-6 bg-offWhite2 rounded-md lg:py-6 lg:px-8">
      <p className="lg:text-xl">{calloutProp.icon}</p>
      <p className="font-bold lg:text-xl">{calloutProp.text}</p>
    </div>
  );
}

interface CalloutProp {
  icon: string; // an emoji
  text: string;
}

export default Callout;
