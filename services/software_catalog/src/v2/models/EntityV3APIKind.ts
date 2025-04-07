import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 API Kind object.
 */
export type EntityV3APIKind = typeof API | UnparsedObject;
export const API = "api";
