import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for secure embed create requests.
 */
export type SecureEmbedRequestType =
  | typeof SECURE_EMBED_REQUEST
  | UnparsedObject;
export const SECURE_EMBED_REQUEST = "secure_embed_request";
