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
