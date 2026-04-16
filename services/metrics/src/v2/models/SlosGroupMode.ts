import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How SLO results are grouped in the response.
 */
export type SlosGroupMode = typeof OVERALL | typeof COMPONENTS | UnparsedObject;
export const OVERALL = "overall";
export const COMPONENTS = "components";
