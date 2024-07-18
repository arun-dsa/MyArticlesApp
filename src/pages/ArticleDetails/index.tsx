import { UseQueryResult } from "@tanstack/react-query";
import { useGetArticleDetailsQuery } from "@utils/api/service";
import { useNavigate, useParams } from "react-router-dom";
import { Drawer, Typography } from "@mui/material";
import { ArticlesDetailsResponse } from "@interfaces/index";
import ArticlesDetailsCard from "@components/ArticleDetailsCard";
import ArticlesDetailsSkeleton from "@components/ArticleDetailsSkeleton";

const ArticleDetails = () => {
  const { id = "" } = useParams();

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

  return (
    <Drawer anchor="right" open={true} onClose={handleDrawerClose}>
      {isPending ? (
        <ArticlesDetailsSkeleton />
      ) : isError ? (
        <Typography>{error.message}</Typography>
      ) : (
        data && <ArticlesDetailsCard article={data} />
      )}
    </Drawer>
  );
};

export default ArticleDetails;
