import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The SBOM standard
 */
export type SBOMFormat = typeof CYCLONEDX | typeof SPDX | UnparsedObject;
export const CYCLONEDX = "CycloneDX";
export const SPDX = "SPDX";
