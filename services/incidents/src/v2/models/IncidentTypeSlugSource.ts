import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * When set to `servicenow`, incidents will display the ServiceNow record ID instead of the public ID. If no ServiceNow integration exists, the public ID will be displayed.
 */
export type IncidentTypeSlugSource =
  | typeof DEFAULT
  | typeof SERVICENOW
  | UnparsedObject;
export const DEFAULT = "default";
export const SERVICENOW = "servicenow";
