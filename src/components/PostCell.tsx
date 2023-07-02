function PostCell(props: PostCellProps) {
  return (
    <a href={props.destination} className="lg:w-72">
      <div className="flex flex-col gap-3 p-6 rounded-xl bg-offWhite1 shadow cell-link">
        <p className="text-primary text-xs sm:text-[14px]">{props.date}</p>
        <h3 className="text-base font-bold sm:text-xl">{props.title}</h3>
        <p className="text-gray text-sm sm:text-base">{props.body}</p>
      </div>
    </a>
  );
}

interface PostCellProps {
  date: string;
  title: string;
  body: string;
  destination: string;
}

export default PostCell;
