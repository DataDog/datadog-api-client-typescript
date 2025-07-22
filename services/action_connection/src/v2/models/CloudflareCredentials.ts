import { UnparsedObject } from "@datadog/datadog-api-client";

import { CloudflareAPIToken } from "./CloudflareAPIToken";
import { CloudflareGlobalAPIToken } from "./CloudflareGlobalAPIToken";

/**
 * The definition of the `CloudflareCredentials` object.
 */
export type CloudflareCredentials =
  | CloudflareAPIToken
  | CloudflareGlobalAPIToken
  | UnparsedObject;
