import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Sort direction.
 */
export type LLMObsExperimentationSortFieldDirection =
  | typeof ASC
  | typeof DESC
  | UnparsedObject;
export const ASC = "asc";
export const DESC = "desc";
