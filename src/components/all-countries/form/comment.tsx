import { Input, Textarea } from "@nextui-org/react";
import { memo } from "react";

export const CommentUser = memo(function MemoCommentUser({
  userComment,
  setUserComment,
}: {
  userComment: string;
  setUserComment: (arg0: string) => void;
}) {
  return (
    <div
      className="flex flex-col items-start justify-start gap-0 w-full
                    600:flex-row 600:items-center 600:gap-5"
    >
      <div className="min-w-[200px] ml-2 600:ml-0">
        <p className="text-gray-500 font-semibold">Комментарий</p>
      </div>
      <div className="flex w-full gap-2 items-center">
        <Textarea
          placeholder="Напишите комментарий"
          className=""
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          classNames={{
            inputWrapper: [
              "py-3 px-4 h-auto w-auto min-w-[250px] w-full border-2 border-slate-300",
              "shadow-lg bg-white hover:!bg-white hover:!border-sky-400",
            ],
            input: "text-md text-gray-700",
          }}
        />
      </div>
    </div>
  );
});