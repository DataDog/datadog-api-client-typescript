import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The GCP project field that the filters are matched against.
 */
export type GCPProjectFilterConfigType =
  | typeof PROJECT_ID
  | typeof PROJECT_LABEL
  | UnparsedObject;
export const PROJECT_ID = "project_id";
export const PROJECT_LABEL = "project_label";
