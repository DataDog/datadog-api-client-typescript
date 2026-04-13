import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for secure embed get responses.
 */
export type SecureEmbedGetResponseType =
  | typeof SECURE_EMBED_GET_RESPONSE
  | UnparsedObject;
export const SECURE_EMBED_GET_RESPONSE = "secure_embed_get_response";
