/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Insert format for events sent to ClickHouse.
 * - `json_each_row`: Maps event fields to columns by name (ClickHouse `JSONEachRow`).
 * - `json_as_object`: Inserts each event into a single `Object('json')` / `JSON` column (ClickHouse `JSONAsObject`).
 * - `json_as_string`: Inserts each event into a single `String`-typed column as raw JSON (ClickHouse `JSONAsString`).
 * - `arrow_stream`: Batches events using Apache Arrow IPC streaming format. Requires `batch_encoding`.
 */

export type ObservabilityPipelineClickhouseDestinationFormat =
  | typeof JSON_EACH_ROW
  | typeof JSON_AS_OBJECT
  | typeof JSON_AS_STRING
  | typeof ARROW_STREAM
  | UnparsedObject;
export const JSON_EACH_ROW = "json_each_row";
export const JSON_AS_OBJECT = "json_as_object";
export const JSON_AS_STRING = "json_as_string";
export const ARROW_STREAM = "arrow_stream";
