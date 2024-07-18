import { useQuery } from "@tanstack/react-query";

import { API_URL } from "@config/index";
import { ArticlesDetailsResponse } from "@interfaces/index";
import { GET_ARTICLES } from "@config/endpoints";

export const useGetArticlesQuery = () => {
  return useQuery({
    queryKey: ["get-articles"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}${GET_ARTICLES}`);

      if (!response.ok) {
        throw new Error(
          `An error occurred while fetching articles. Please try agian later.Response status: ${response.status}`
        );
      }

      return (await response.json()) as ArticlesDetailsResponse[];
    },
  });
};

export const useGetArticleDetailsQuery = (articleId: string) => {
  return useQuery({
    queryKey: ["get-article-details", articleId],
    queryFn: async () => {
      const response = await fetch(`${API_URL}${GET_ARTICLES}/${articleId}`);

      if (!response.ok) {
        throw new Error(
          `An error occurred while fetching article details.Response status: ${response.status}`
        );
      }

      return (await response.json()) as ArticlesDetailsResponse;
    },
  });
};
