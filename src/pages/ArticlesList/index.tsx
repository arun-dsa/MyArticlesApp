import { Outlet, useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { UseQueryResult } from "@tanstack/react-query";

import ErrorPage from "@pages/ErrorPage";
import ArticlesCard from "@components/ArticlesCard";
import { ArticlesDetailsResponse } from "@interfaces/index";
import { useGetArticlesQuery } from "@utils/api/service";
import ArticlesSkeleton from "@components/ArticlesSkeleton";

const ArticlesList = () => {
  const { id } = useParams();
  const {
    data,
    isPending,
    isError,
    error,
  }: UseQueryResult<ArticlesDetailsResponse[], Error> = useGetArticlesQuery();

  if (isPending) {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {Array.from({ length: 10 }, (_, i) => i).map((id: number) => (
            <Grid
              item
              key={id}
              xs={12}
              sm={6}
              md={4}
              data-testid={`article-card-skeleton-${id}`}
            >
              <ArticlesSkeleton id={id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (isError) {
    return <ErrorPage errorResponse={error} />;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {data?.map((article) => {
            return (
              <Grid
                item
                key={article?.id}
                xs={12}
                sm={6}
                md={4}
                data-testid={`article-card-${article.id}`}
              >
                <ArticlesCard article={article} />
              </Grid>
            );
          })}
        </Grid>
        {Boolean(id) && <Outlet />}
      </Container>
    </>
  );
};

export default ArticlesList;
