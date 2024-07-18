import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import { AppHeaderText } from "@components/StyledComponents";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NewspaperIcon sx={{ fontSize: 40, marginRight: "1rem" }} />
          <AppHeaderText variant="h6" noWrap data-testid="header">
            My Articles
          </AppHeaderText>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
