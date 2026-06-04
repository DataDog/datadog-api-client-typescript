import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for service repository info objects.
 */
export type ServiceRepositoryInfoDataType =
  | typeof SERVICE_REPOSITORY_INFO
  | UnparsedObject;
export const SERVICE_REPOSITORY_INFO = "service_repository_info";
