import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for a project artifacts resource.
 */
export type ModelLabProjectArtifactsType =
  | typeof PROJECT_FILES
  | UnparsedObject;
export const PROJECT_FILES = "project_files";
