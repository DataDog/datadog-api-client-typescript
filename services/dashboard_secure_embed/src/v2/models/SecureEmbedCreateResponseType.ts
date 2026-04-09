import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for secure embed create responses.
 */
export type SecureEmbedCreateResponseType =
  | typeof SECURE_EMBED_CREATE_RESPONSE
  | UnparsedObject;
export const SECURE_EMBED_CREATE_RESPONSE = "secure_embed_create_response";
