import { UnparsedObject } from "@datadog/datadog-api-client";

import { GitlabAPIKey } from "./GitlabAPIKey";

/**
 * The definition of the `GitlabCredentials` object.
 */
export type GitlabCredentials = GitlabAPIKey | UnparsedObject;
