import { CardBodyText, CardTitleText } from "@components/StyledComponents";
import { ArticlesDetailsResponse } from "@interfaces/index";
import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShareIcon from "@mui/icons-material/Share";
import { NAVIGATION_LINKS } from "@config/constants";

const ArticlesCard = ({ article }: { article: ArticlesDetailsResponse }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`${NAVIGATION_LINKS.ARTICLES}/${article.id}`);
  };

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
          data-testid={`article-title-${article.id}`}
        >
          {article.title}
        </CardTitleText>
        <CardBodyText
          variant="body2"
          color="text.secondary"
          data-testid={`article-summary-${article.id}`}
        >
          {article.summary}
        </CardBodyText>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          component="a"
          href={`mailto:change-it-to-email-to-share@gmail.com?subject=Read this article - ${article.title}&body=${article.summary}. Read the full article here ${window.location.href}articles/${article.id}`}
          size="small"
          variant="outlined"
          startIcon={<ShareIcon />}
          sx={{ textTransform: "none" }}
          data-testid={`share-article-${article.id}`}
        >
          Share
        </Button>
        <Button
          onClick={handleViewMore}
          size="small"
          variant="contained"
          startIcon={<ListAltIcon />}
          sx={{ textTransform: "none" }}
          data-testid={`article-view-full-${article.id}`}
        >
          View Full Article
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticlesCard;
