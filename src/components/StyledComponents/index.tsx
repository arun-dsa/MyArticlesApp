import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AppHeaderText = styled(Typography)({
  display: "flex",
  fontWeight: 700,
  marginRight: "1rem",
  fontSize: "1.25rem",
});

export const CardTitleText = styled(Typography)({
  fontWeight: 700,
  fontSize: "1rem",
  display: "-webkit-box",
  "-webkit-line-clamp": "2",
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
});

export const CardBodyText = styled(Typography)({
  fontSize: "0.875rem",
  display: "-webkit-box",
  "-webkit-line-clamp": "3",
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
});

export const DetailsCardTitleText = styled(Typography)({
  fontWeight: 700,
  fontSize: "1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "1rem",
});

export const DetailsCardBodyText = styled(Typography)({
  fontSize: "0.875rem",
});
