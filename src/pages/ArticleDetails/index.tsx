import { UseQueryResult } from "@tanstack/react-query";
import { useGetArticleDetailsQuery } from "@utils/api/service";
import { useNavigate, useParams } from "react-router-dom";
import { Drawer, Typography } from "@mui/material";
import { ArticlesDetailsResponse } from "@interfaces/index";
import ArticlesDetailsCard from "@components/ArticleDetailsCard";
import ArticlesDetailsSkeleton from "@components/ArticleDetailsSkeleton";

const ArticleDetails = () => {
  const { id = "" } = useParams();
  console.log("id", id);

  if (!id) {
    return;
  }

  const navigate = useNavigate();
  const {
    data,
    isPending,
    isError,
    error,
  }: UseQueryResult<ArticlesDetailsResponse, Error> =
    useGetArticleDetailsQuery(id);

  const handleDrawerClose = () => {
    navigate("/");
  };

  const renderArticleDetails = () => {
    if (isPending) {
      return <ArticlesDetailsSkeleton />;
    }

    if (isError) {
      return (
        <Typography data-testid="article-details-error">
          {error?.message}
        </Typography>
      );
    }

    return Boolean(data) && <ArticlesDetailsCard article={data} />;
  };

  return (
    <Drawer anchor="right" open={true} onClose={handleDrawerClose}>
      {renderArticleDetails()}
    </Drawer>
  );
};

export default ArticleDetails;
