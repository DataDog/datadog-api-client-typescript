import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The supported STIX specification version.
 */
export type STIXSpecVersion = typeof VERSION_2_1 | UnparsedObject;
export const VERSION_2_1 = "2.1";
