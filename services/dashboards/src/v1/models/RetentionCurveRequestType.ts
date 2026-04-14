import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Request type for retention curve widget.
 */
export type RetentionCurveRequestType = typeof RETENTION_CURVE | UnparsedObject;
export const RETENTION_CURVE = "retention_curve";
