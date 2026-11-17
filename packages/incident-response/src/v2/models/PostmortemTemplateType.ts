import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Postmortem template resource type.
 */
export type PostmortemTemplateType =
  | typeof POSTMORTEM_TEMPLATES
  | typeof POSTMORTEM_TEMPLATE
  | UnparsedObject;
export const POSTMORTEM_TEMPLATES = "postmortem_templates";
export const POSTMORTEM_TEMPLATE = "postmortem_template";
