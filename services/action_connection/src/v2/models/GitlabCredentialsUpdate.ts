import { UnparsedObject } from "@datadog/datadog-api-client";

import { GitlabAPIKeyUpdate } from "./GitlabAPIKeyUpdate";

/**
 * The definition of the `GitlabCredentialsUpdate` object.
 */
export type GitlabCredentialsUpdate = GitlabAPIKeyUpdate | UnparsedObject;
