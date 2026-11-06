import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The GitHub integration type.
 */
export type GithubIntegrationType = typeof GITHUB | UnparsedObject;
export const GITHUB = "Github";
