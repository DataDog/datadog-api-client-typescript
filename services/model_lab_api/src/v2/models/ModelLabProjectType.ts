import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for a Model Lab project resource.
 */
export type ModelLabProjectType = typeof PROJECTS | UnparsedObject;
export const PROJECTS = "projects";
