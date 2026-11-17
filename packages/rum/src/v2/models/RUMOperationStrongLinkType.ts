import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API type for RUM operation link resources.
 */
export type RUMOperationStrongLinkType = typeof STRONG_LINKS | UnparsedObject;
export const STRONG_LINKS = "strong_links";
