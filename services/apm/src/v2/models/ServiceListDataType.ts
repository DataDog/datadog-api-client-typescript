import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Services list resource type.
 */
export type ServiceListDataType = typeof SERVICES_LIST | UnparsedObject;
export const SERVICES_LIST = "services_list";
