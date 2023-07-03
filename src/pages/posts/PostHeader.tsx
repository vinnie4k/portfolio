function PostHeader(props: PostHeaderProps) {
  return (
    <>
      <div className="flex flex-row gap-4 lg:gap-8">
        <p className="text-sm lg:text-xl">{props.category}</p>
        <p className="text-sm text-gray lg:text-xl">{props.date}</p>
      </div>
      <h1 className="mt-6 font-bold text-3xl leading-[42px] lg:text-6xl">
        {props.title}
      </h1>
      <div className="underline-mobile mt-2 lg:underline-desktop lg:mt-6"></div>
    </>
  );
}

interface PostHeaderProps {
  category: string;
  date: string;
  title: string;
}

export default PostHeader;
