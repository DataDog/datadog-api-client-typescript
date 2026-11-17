import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { GithubApp } from "./GithubApp";
import { GithubPersonalAccessToken } from "./GithubPersonalAccessToken";

/**
 * Supported GitHub connection credentials.
 */
export type GithubCredentials =
  | GithubApp
  | GithubPersonalAccessToken
  | UnparsedObject;
