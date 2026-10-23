import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The ingestion method used to send data to Azure Data Explorer.
 *
 * - `streaming`: Sends events directly to the table using streaming ingestion.
 * - `queue`: Sends events through queued (batched) ingestion.
 *
 * Defaults to `streaming`.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationIngestionMode =
  | typeof STREAMING
  | typeof QUEUE
  | UnparsedObject;
export const STREAMING = "streaming";
export const QUEUE = "queue";
