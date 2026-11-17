import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The status of a RUM operation link.
 */
export type RUMOperationStrongLinkStatus =
  | typeof DRAFT
  | typeof CONFIRMED
  | typeof REJECTED
  | UnparsedObject;
export const DRAFT = "DRAFT";
export const CONFIRMED = "CONFIRMED";
export const REJECTED = "REJECTED";
