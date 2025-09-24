import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The GCP monitored resource type. Only a subset of resource types are supported.
 */
export type GCPMonitoredResourceConfigType =
  | typeof CLOUD_FUNCTION
  | typeof CLOUD_RUN_REVISION
  | typeof GCE_INSTANCE
  | UnparsedObject;
export const CLOUD_FUNCTION = "cloud_function";
export const CLOUD_RUN_REVISION = "cloud_run_revision";
export const GCE_INSTANCE = "gce_instance";
