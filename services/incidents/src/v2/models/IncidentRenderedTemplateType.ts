import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Rendered template resource type.
 */
export type IncidentRenderedTemplateType =
  | typeof RENDERED_TEMPLATES
  | UnparsedObject;
export const RENDERED_TEMPLATES = "rendered_templates";
