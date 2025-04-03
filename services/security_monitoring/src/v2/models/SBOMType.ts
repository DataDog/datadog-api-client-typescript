import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type.
 */
export type SBOMType = typeof SBOMS | UnparsedObject;
export const SBOMS = "sboms";
