import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Postmortem template resource type
 */
export type PostmortemTemplateType =
  | typeof POSTMORTEM_TEMPLATE
  | UnparsedObject;
export const POSTMORTEM_TEMPLATE = "postmortem_template";
