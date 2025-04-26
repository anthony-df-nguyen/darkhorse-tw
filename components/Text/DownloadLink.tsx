import React from "react";
import { IoMdDownload } from "react-icons/io";

type Props = {
  href: string;
  text: string;
  downloadName: string;
};

export default function download_file({ href, text, downloadName }: Props) {
  return (
    <a
      href={href}
      download={downloadName}
      className="text-accent font-semibold underline flex flex-row items-center gap-1 justify-center "
    >
      <div className="">
        <IoMdDownload />
      </div>
      <div>{text}</div>
    </a>
  );
}
