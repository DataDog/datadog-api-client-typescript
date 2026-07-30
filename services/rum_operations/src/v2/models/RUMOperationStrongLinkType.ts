import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for RUM operation strong link resources.
 */
export type RUMOperationStrongLinkType = typeof STRONG_LINKS | UnparsedObject;
export const STRONG_LINKS = "strong_links";
