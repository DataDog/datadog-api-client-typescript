import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Which type of infrastructure entity to visualize in the host map.
 */
export type HostMapWidgetNodeType =
  | typeof HOST
  | typeof CONTAINER
  | typeof POD
  | typeof CLUSTER
  | UnparsedObject;
export const HOST = "host";
export const CONTAINER = "container";
export const POD = "pod";
export const CLUSTER = "cluster";
