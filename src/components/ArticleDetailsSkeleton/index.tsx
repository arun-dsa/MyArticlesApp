import { useNavigate } from "react-router-dom";
import { Box, Divider, Skeleton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  DetailsCardBodyText,
  DetailsCardTitleText,
} from "@components/StyledComponents";

const ArticlesDetailsSkeleton = () => {
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
    >
      <Stack>
        <DetailsCardTitleText
          gutterBottom
          variant="h5"
          data-testid={`article-details-title-skeleton`}
        >
          <Skeleton variant="rectangular" width="100%" height={40} />
          <CloseIcon onClick={handleBackAction} cursor="pointer" />
        </DetailsCardTitleText>
        <Divider />
        <DetailsCardBodyText
          variant="body2"
          sx={{ marginTop: "1rem" }}
          data-testid={`article-details-summary-skeleton`}
        >
          <Skeleton variant="rectangular" width="100%" height={80} />
        </DetailsCardBodyText>
        <DetailsCardBodyText
          variant="body2"
          sx={{ my: "1rem" }}
          data-testid={`article-details-full-text-skeleton`}
        >
          <Skeleton variant="rectangular" width="100%" height={180} />
        </DetailsCardBodyText>
      </Stack>
      <Divider />
      <Box mt={2}>
        <Skeleton
          variant="rectangular"
          width={150}
          height={40}
          sx={{ float: "right" }}
        />
      </Box>
    </Stack>
  );
};

export default ArticlesDetailsSkeleton;
