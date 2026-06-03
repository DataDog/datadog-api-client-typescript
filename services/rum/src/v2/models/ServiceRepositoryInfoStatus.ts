import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the service repository info lookup.
 */
export type ServiceRepositoryInfoStatus =
  | typeof SUCCESS
  | typeof NOT_FOUND
  | typeof NO_REPOSITORY
  | typeof INTERNAL_ERROR
  | typeof UNKNOWN
  | UnparsedObject;
export const SUCCESS = "success";
export const NOT_FOUND = "not_found";
export const NO_REPOSITORY = "no_repository";
export const INTERNAL_ERROR = "internal_error";
export const UNKNOWN = "unknown";
