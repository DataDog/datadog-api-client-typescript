import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Request type for retention curve widget.
 */
export type RetentionCurveRequestType = typeof RETENTION_CURVE | UnparsedObject;
export const RETENTION_CURVE = "retention_curve";
