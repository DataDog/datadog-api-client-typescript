import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The credential type for `GithubPersonalAccessToken`.
 */
export type GithubPersonalAccessTokenType =
  | typeof GITHUBPERSONALACCESSTOKEN
  | UnparsedObject;
export const GITHUBPERSONALACCESSTOKEN = "GithubPersonalAccessToken";
