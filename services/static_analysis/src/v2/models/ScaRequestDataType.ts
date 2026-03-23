import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for SCA dependency analysis requests.
 */
export type ScaRequestDataType = typeof SCAREQUESTS | UnparsedObject;
export const SCAREQUESTS = "scarequests";
