function PostHeader(props: PostHeaderProps) {
  return (
    <>
      <div className="flex flex-row gap-4">
        <p className="text-sm">{props.category}</p>
        <p className="text-sm text-gray">{props.date}</p>
      </div>
      <h1 className="mt-6 font-bold text-3xl leading-[42px]">{props.title}</h1>
      <div className="underline-mobile mt-2"></div>
    </>
  );
}

interface PostHeaderProps {
  category: string;
  date: string;
  title: string;
}

export default PostHeader;
