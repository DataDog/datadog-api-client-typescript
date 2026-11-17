import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The STIX object type for a bundle.
 */
export type STIXBundleType = typeof BUNDLE | UnparsedObject;
export const BUNDLE = "bundle";
