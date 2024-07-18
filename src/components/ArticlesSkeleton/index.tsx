import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Skeleton,
} from "@mui/material";

import { CardBodyText, CardTitleText } from "@components/StyledComponents";

const ArticlesSkeleton = ({ id }: { id: string | number }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <CardTitleText
          gutterBottom
          variant="h5"
          data-testid={`article-title-skeleton${id}`}
        >
          <Skeleton width="100%" height={45} />
        </CardTitleText>
        <CardBodyText
          variant="body2"
          color="text.secondary"
          data-testid={`article-summary-skeleton${id}`}
        >
          <Skeleton width="100%" height={70} />
        </CardBodyText>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Skeleton
          width={100}
          height={40}
          data-testid={`article-share-skeleton${id}`}
        />
        <Skeleton
          width={150}
          height={40}
          data-testid={`article-view-full-skeleton${id}`}
        />
      </CardActions>
    </Card>
  );
};

export default ArticlesSkeleton;
