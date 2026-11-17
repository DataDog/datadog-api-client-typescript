import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of the `GitlabIntegrationType` object.
 */
export type GitlabIntegrationType = typeof GITLAB | UnparsedObject;
export const GITLAB = "Gitlab";
