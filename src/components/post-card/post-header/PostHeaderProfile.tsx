import { format } from "date-fns";

import { PostAuthorizationType } from "../../../types/post";
import { Profile } from "../../profile/Profile";

export type PostHeaderProfileProps = {
  author: PostAuthorizationType;
  createdAt: string;
};
export const PostHeaderProfile = (props: PostHeaderProfileProps) => {
  const { author, createdAt } = props;
  const createDate = new Date(createdAt);

  return (
    <>
      <Profile author={author} subtitle={format(createDate, "PP")} />
    </>
  );
};
