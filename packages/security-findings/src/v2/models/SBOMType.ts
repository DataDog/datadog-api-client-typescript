import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API type.
 */
export type SBOMType = typeof SBOMS | UnparsedObject;
export const SBOMS = "sboms";
