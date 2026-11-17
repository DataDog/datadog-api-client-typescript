import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type for secure embed update requests.
 */
export type SecureEmbedUpdateRequestType =
  | typeof SECURE_EMBED_UPDATE_REQUEST
  | UnparsedObject;
export const SECURE_EMBED_UPDATE_REQUEST = "secure_embed_update_request";
