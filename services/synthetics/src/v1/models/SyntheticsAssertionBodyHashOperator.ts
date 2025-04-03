import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Assertion operator to apply.
 */
export type SyntheticsAssertionBodyHashOperator =
  | typeof MD5
  | typeof SHA1
  | typeof SHA256
  | UnparsedObject;
export const MD5 = "md5";
export const SHA1 = "sha1";
export const SHA256 = "sha256";
