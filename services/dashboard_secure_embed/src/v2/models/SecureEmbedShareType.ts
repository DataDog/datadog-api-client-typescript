import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of share. Always `secure_embed`.
 */
export type SecureEmbedShareType = typeof SECURE_EMBED | UnparsedObject;
export const SECURE_EMBED = "secure_embed";
