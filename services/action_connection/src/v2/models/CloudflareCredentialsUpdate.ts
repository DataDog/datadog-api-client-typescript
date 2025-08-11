import { UnparsedObject } from "@datadog/datadog-api-client";

import { CloudflareAPITokenUpdate } from "./CloudflareAPITokenUpdate";
import { CloudflareGlobalAPITokenUpdate } from "./CloudflareGlobalAPITokenUpdate";

/**
 * The definition of the `CloudflareCredentialsUpdate` object.
 */
export type CloudflareCredentialsUpdate =
  | CloudflareAPITokenUpdate
  | CloudflareGlobalAPITokenUpdate
  | UnparsedObject;
