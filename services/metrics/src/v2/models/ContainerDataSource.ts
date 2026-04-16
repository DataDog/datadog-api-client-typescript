import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A data source for container-level infrastructure metrics.
 */
export type ContainerDataSource = typeof CONTAINER | UnparsedObject;
export const CONTAINER = "container";
