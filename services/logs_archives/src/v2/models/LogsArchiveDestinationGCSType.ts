import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the GCS archive destination.
 */
export type LogsArchiveDestinationGCSType = typeof GCS | UnparsedObject;
export const GCS = "gcs";
