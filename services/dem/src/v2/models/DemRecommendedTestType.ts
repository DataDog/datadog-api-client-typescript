import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for a recommended synthetic test.
 */
export type DemRecommendedTestType = typeof RECOMMENDED_TESTS | UnparsedObject;
export const RECOMMENDED_TESTS = "recommended_tests";
