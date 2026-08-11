import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for the GitHub account resource.
 * The value must always be `ci_github_account`.
 */
export type CIAppGitHubAccountType = typeof CI_GITHUB_ACCOUNT | UnparsedObject;
export const CI_GITHUB_ACCOUNT = "ci_github_account";
