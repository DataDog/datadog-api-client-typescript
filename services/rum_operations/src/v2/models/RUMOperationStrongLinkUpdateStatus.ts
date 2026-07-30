import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a RUM operation strong link. Can only be set to `CONFIRMED` or `REJECTED`.
 */
export type RUMOperationStrongLinkUpdateStatus =
  | typeof CONFIRMED
  | typeof REJECTED
  | UnparsedObject;
export const CONFIRMED = "CONFIRMED";
export const REJECTED = "REJECTED";
