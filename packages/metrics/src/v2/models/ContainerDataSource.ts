import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * A data source for container-level infrastructure metrics.
 */
export type ContainerDataSource = typeof CONTAINER | UnparsedObject;
export const CONTAINER = "container";
