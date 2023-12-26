import Link from "next/link";

interface Props {
  title: string;
}

import {allPosts} from "contentlayer/generated";

function TroubleShottingButton({title}: Props) {
  const posts = allPosts.map((post) => post.category);
  console.log(posts);

  return (
    <>
      <Link
        href={`/trouble/${title}`}
        className="p-4 mt-8 hover:scale-105 delay-75 ease-linear transition-transform text-center font-jalnan text-xl  hover:text-rose-500">
        <span>🚨</span>
        <span>트러블 슈팅 보러가기</span>
      </Link>
    </>
  );
}

export default TroubleShottingButton;
