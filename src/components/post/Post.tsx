import { PostType } from "../../types/post";
import { PostCard } from "../post-card/PostCard";
import { PostStyle } from "./post.style";

type Props = PostType;
export const Post = (props: Props) => {
  return (
    <PostStyle>
      <PostCard {...props} />
    </PostStyle>
  );
};
