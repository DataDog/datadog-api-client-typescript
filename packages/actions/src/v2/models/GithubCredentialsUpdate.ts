import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { GithubAppUpdate } from "./GithubAppUpdate";
import { GithubPersonalAccessTokenUpdate } from "./GithubPersonalAccessTokenUpdate";

/**
 * Supported GitHub connection credentials for an update.
 */
export type GithubCredentialsUpdate =
  | GithubAppUpdate
  | GithubPersonalAccessTokenUpdate
  | UnparsedObject;
