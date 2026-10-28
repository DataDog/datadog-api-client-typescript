/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
