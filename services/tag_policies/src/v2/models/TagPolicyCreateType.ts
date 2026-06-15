import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The policy type allowed when creating a tag policy. Only `surfacing` is accepted at
 * creation time.
 */
export type TagPolicyCreateType = typeof SURFACING | UnparsedObject;
export const SURFACING = "surfacing";
