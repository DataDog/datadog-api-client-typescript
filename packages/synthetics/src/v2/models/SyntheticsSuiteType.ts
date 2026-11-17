import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the Synthetic suite, `suite`.
 */
export type SyntheticsSuiteType = typeof SUITE | UnparsedObject;
export const SUITE = "suite";
