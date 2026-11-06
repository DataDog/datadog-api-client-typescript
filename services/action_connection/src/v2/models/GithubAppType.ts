import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The credential type for `GithubApp`.
 */
export type GithubAppType = typeof GITHUBAPP | UnparsedObject;
export const GITHUBAPP = "GithubApp";
