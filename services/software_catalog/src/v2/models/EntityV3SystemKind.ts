import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 System Kind object.
 */
export type EntityV3SystemKind = typeof SYSTEM | UnparsedObject;
export const SYSTEM = "system";
