import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for ServiceNow template resources
 */
export type ServiceNowTemplateType =
  | typeof SERVICENOW_TEMPLATES
  | UnparsedObject;
export const SERVICENOW_TEMPLATES = "servicenow_templates";
