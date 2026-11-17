import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { GitlabAPIKey } from "./GitlabAPIKey";

/**
 * The definition of the `GitlabCredentials` object.
 */
export type GitlabCredentials = GitlabAPIKey | UnparsedObject;
