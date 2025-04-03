import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic test, `api`.
 */
export type SyntheticsAPITestType = typeof API | UnparsedObject;
export const API = "api";
