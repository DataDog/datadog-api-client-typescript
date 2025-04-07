import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The storage class where the archive will be stored.
 */
export type LogsArchiveStorageClassS3Type =
  | typeof STANDARD
  | typeof STANDARD_IA
  | typeof ONEZONE_IA
  | typeof INTELLIGENT_TIERING
  | typeof GLACIER_IR
  | UnparsedObject;
export const STANDARD = "STANDARD";
export const STANDARD_IA = "STANDARD_IA";
export const ONEZONE_IA = "ONEZONE_IA";
export const INTELLIGENT_TIERING = "INTELLIGENT_TIERING";
export const GLACIER_IR = "GLACIER_IR";
