import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Service Kind object.
 */
export type EntityV3ServiceKind = typeof SERVICE | UnparsedObject;
export const SERVICE = "service";
