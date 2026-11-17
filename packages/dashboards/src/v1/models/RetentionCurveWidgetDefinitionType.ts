import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the Retention Curve widget.
 */
export type RetentionCurveWidgetDefinitionType =
  | typeof RETENTION_CURVE
  | UnparsedObject;
export const RETENTION_CURVE = "retention_curve";
