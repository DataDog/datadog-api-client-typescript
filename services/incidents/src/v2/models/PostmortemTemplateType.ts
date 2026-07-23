import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Postmortem template resource type.
 */
export type PostmortemTemplateType =
  | typeof POSTMORTEM_TEMPLATES
  | UnparsedObject;
export const POSTMORTEM_TEMPLATES = "postmortem_templates";
