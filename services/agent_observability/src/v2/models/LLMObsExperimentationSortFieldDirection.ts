import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sort direction.
 */
export type LLMObsExperimentationSortFieldDirection =
  | typeof ASC
  | typeof DESC
  | UnparsedObject;
export const ASC = "asc";
export const DESC = "desc";
