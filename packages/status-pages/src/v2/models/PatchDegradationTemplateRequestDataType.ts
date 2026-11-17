import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Degradation templates resource type.
 */
export type PatchDegradationTemplateRequestDataType =
  | typeof DEGRADATION_TEMPLATES
  | UnparsedObject;
export const DEGRADATION_TEMPLATES = "degradation_templates";
