import { useState } from "react";
import { PostHeader } from "./post-header/PostHeader";
import { PostType } from "../../types/post";
import { Link } from "react-router-dom";
import { Typography, Button, Popover } from "@mui/material";
import { PostCardStyle } from "./post-card.style";

type Props = PostType & {
  postControl?: boolean;
  onDelete?: any;
};

export const PostCard = (props: Props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const {
    title,
    favorited,
    favoritesCount,
    tagList,
    author,
    createdAt,
    description,
    slug,
    postControl,
    onDelete,
  } = props;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  return (
    <>
      <PostHeader
        titleContent={title}
        favorited={favorited}
        favoritesCount={favoritesCount}
        tagList={tagList}
        author={author}
        createdAt={createdAt}
        slug={slug}
      />

      <PostCardStyle>
        <Typography
          sx={{ fontSize: 12, marginTop: 4, color: "rgba(0, 0, 0, 0.5)" }}
        >
          {description}
        </Typography>
        {postControl && (
          <div className="postButtons">
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={handlePopoverOpen}
            >
              Delete
            </Button>
            <Popover
              open={isPopoverOpen}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Typography sx={{ p: 2 }}>
                Are you sure to delete this article?
              </Typography>
              <Button onClick={onDelete} sx={{ mr: 1, ml: 8 }}>
                Yes
              </Button>
              <Button onClick={handlePopoverClose}>No</Button>
            </Popover>
            <Button
              component={Link}
              to={"edit"}
              variant="outlined"
              color="success"
              size="small"
              style={{ textTransform: "capitalize" }}
            >
              Edit
            </Button>
          </div>
        )}
      </PostCardStyle>
    </>
  );
};
