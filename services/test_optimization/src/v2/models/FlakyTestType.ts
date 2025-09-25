import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the flaky test from Flaky Test Management.
 */
export type FlakyTestType = typeof FLAKY_TEST | UnparsedObject;
export const FLAKY_TEST = "flaky_test";
