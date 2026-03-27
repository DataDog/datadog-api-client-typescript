import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the version resource.
 */
export type SyntheticsTestVersionType = typeof VERSION | UnparsedObject;
export const VERSION = "version";
