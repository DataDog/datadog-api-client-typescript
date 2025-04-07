import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for this API. Should always be `fastly-services`.
 */
export type FastlyServiceType = typeof FASTLY_SERVICES | UnparsedObject;
export const FASTLY_SERVICES = "fastly-services";
