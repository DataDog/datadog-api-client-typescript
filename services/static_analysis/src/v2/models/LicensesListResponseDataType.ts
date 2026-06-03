import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for license list responses.
 */
export type LicensesListResponseDataType =
  | typeof LICENSEREQUEST
  | UnparsedObject;
export const LICENSEREQUEST = "licenserequest";
