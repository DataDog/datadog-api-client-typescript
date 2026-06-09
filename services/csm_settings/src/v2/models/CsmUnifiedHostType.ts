import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for unified host resources. The value should always be `unified_host`.
 */
export type CsmUnifiedHostType = typeof UNIFIED_HOST | UnparsedObject;
export const UNIFIED_HOST = "unified_host";
