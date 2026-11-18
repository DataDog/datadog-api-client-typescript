import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Kind of entity that a segment contains.
 */
export type SegmentEntity = typeof USER | typeof ACCOUNT | UnparsedObject;
export const USER = "user";
export const ACCOUNT = "account";
