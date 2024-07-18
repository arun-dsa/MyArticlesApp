import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import theme from "@utils/theme";
import Header from "@components/Header";

const queryClient = new QueryClient();

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Header />
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  </QueryClientProvider>
);

export default RootLayout;
