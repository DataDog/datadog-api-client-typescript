import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the parent suite resource.
 */
export type SyntheticsTestParentSuiteType =
  | typeof PARENT_SUITE
  | UnparsedObject;
export const PARENT_SUITE = "parent_suite";
