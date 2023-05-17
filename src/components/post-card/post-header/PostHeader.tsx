import { PostHeaderInfo, PostHeaderInfoProps } from "./PostHeaderInfo";
import { PostHeaderProfile, PostHeaderProfileProps } from "./PostHeaderProfile";
import { PostHeaderStyle } from "./post-header.style";

type Props = PostHeaderInfoProps & PostHeaderProfileProps;

export const PostHeader = (props: Props) => {
  const {
    titleContent,
    favoritesCount,
    favorited,
    tagList,
    createdAt,
    author,
    slug,
  } = props;

  return (
    <PostHeaderStyle>
      <PostHeaderInfo
        titleContent={titleContent}
        favoritesCount={favoritesCount}
        favorited={favorited}
        tagList={tagList}
        slug={slug}
      />
      <PostHeaderProfile createdAt={createdAt} author={author} />
    </PostHeaderStyle>
  );
};
