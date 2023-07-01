import * as React from "react";

function PostCell(props: PostCellProps) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-xl bg-offWhite1 shadow">
      <p className="text-primary text-xs">{props.date}</p>
      <h3 className="text-base font-bold">{props.title}</h3>
      <p className="text-gray text-sm">{props.body}</p>
    </div>
  );
}

interface PostCellProps {
  date: string;
  title: string;
  body: string;
}

export default PostCell;
