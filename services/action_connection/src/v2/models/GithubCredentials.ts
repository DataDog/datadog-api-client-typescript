import { UnparsedObject } from "@datadog/datadog-api-client";

import { GithubApp } from "./GithubApp";
import { GithubPersonalAccessToken } from "./GithubPersonalAccessToken";

/**
 * Supported GitHub connection credentials.
 */
export type GithubCredentials =
  | GithubApp
  | GithubPersonalAccessToken
  | UnparsedObject;
