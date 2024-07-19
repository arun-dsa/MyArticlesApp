import { Box, Button, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";

import {
  DetailsCardBodyText,
  DetailsCardTitleText,
} from "@components/StyledComponents";
import { ArticlesDetailsResponse } from "@interfaces/index";

const ArticlesDetailsCard = ({
  article,
}: {
  article: ArticlesDetailsResponse;
}) => {
  const navigate = useNavigate();

  const handleBackAction = () => {
    navigate("/");
  };

  return (
    <Stack
      sx={{
        width: { xs: "100vw", md: "50vw" },
        padding: "1rem",
      }}
      data-testid={`article-details-card-${article.id}`}
    >
      <Stack>
        <DetailsCardTitleText
          gutterBottom
          variant="h5"
          data-testid={`article-details-title-${article.id}`}
        >
          {article.title}
          <CloseIcon onClick={handleBackAction} cursor="pointer" />
        </DetailsCardTitleText>
        <Divider />
        <DetailsCardBodyText
          variant="body2"
          sx={{ marginTop: "1rem" }}
          data-testid={`article-details-summary-${article.id}`}
        >
          {article.summary}
        </DetailsCardBodyText>
        <DetailsCardBodyText
          variant="body2"
          sx={{ my: "1rem" }}
          data-testid={`article-details-full-text-${article.id}`}
        >
          {article.fullText}
        </DetailsCardBodyText>
      </Stack>
      <Divider />
      <Box mt={2}>
        <Button
          component="a"
          href={`mailto:change-it-to-email-to-share@gmail.com?subject=Read this article - ${article.title}&body=${article.summary}. Read the full article here ${window.location.href}articles/${article.id}`}
          size="small"
          startIcon={<ShareIcon />}
          variant="outlined"
          sx={{ float: "right", textTransform: "none" }}
          data-testid={`share-article-${article.id}`}
        >
          Share
        </Button>
      </Box>
    </Stack>
  );
};

export default ArticlesDetailsCard;
