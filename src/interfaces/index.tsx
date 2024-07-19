import { ReactNode } from "react";

export interface ErrorResponse {
  statusText?: string;
  message?: string;
}

export interface ArticlesDetailsResponse {
  id: string;
  title: string;
  summary: string;
  fullText?: string;
}

export interface RouteType {
  path: string;
  element: ReactNode;
}
