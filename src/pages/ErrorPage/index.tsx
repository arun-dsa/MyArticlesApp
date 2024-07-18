import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

import { ErrorResponse } from "@interfaces/index";

const ErrorPage = ({ errorResponse }: { errorResponse?: Error }) => {
  const error: ErrorResponse = errorResponse
    ? errorResponse
    : (useRouteError() as ErrorResponse);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      data-testid="error-page"
    >
      <Typography variant="h4" gutterBottom>
        Something went wrong
      </Typography>
      <Typography variant="body1">
        {error?.statusText || error?.message}
      </Typography>
    </Box>
  );
};

export default ErrorPage;
