/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineClickhouseDestinationAuth } from "./ObservabilityPipelineClickhouseDestinationAuth";
import { ObservabilityPipelineClickhouseDestinationBatch } from "./ObservabilityPipelineClickhouseDestinationBatch";
import { ObservabilityPipelineClickhouseDestinationBatchEncoding } from "./ObservabilityPipelineClickhouseDestinationBatchEncoding";
import { ObservabilityPipelineClickhouseDestinationCompression } from "./ObservabilityPipelineClickhouseDestinationCompression";
import { ObservabilityPipelineClickhouseDestinationFormat } from "./ObservabilityPipelineClickhouseDestinationFormat";
import { ObservabilityPipelineClickhouseDestinationType } from "./ObservabilityPipelineClickhouseDestinationType";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The `clickhouse` destination sends log events to a ClickHouse database table over HTTP.
 * 
 * **Supported pipeline types:** logs.
*/
export class ObservabilityPipelineClickhouseDestination {
  /**
   * HTTP Basic Authentication credentials for the ClickHouse destination.
   * When `strategy` is `basic`, provide `username_key` and `password_key` that reference environment variables or secrets containing the credentials.
  */
  "auth"?: ObservabilityPipelineClickhouseDestinationAuth;
  /**
   * Batching configuration for ClickHouse inserts.
  */
  "batch"?: ObservabilityPipelineClickhouseDestinationBatch;
  /**
   * Batch encoding configuration for the ClickHouse destination.
   * Required when `format` is `arrow_stream`. The `codec` field must be set to `arrow_stream`.
  */
  "batchEncoding"?: ObservabilityPipelineClickhouseDestinationBatchEncoding;
  /**
   * Configuration for buffer settings on destination components.
  */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * Compression setting for outbound HTTP requests to ClickHouse.
   * Can be specified as a shorthand string (`"gzip"` or `"none"`) or as an object
   * with an `algorithm` field and an optional `level` (gzip only, 1–9).
  */
  "compression"?: ObservabilityPipelineClickhouseDestinationCompression;
  /**
   * Optional ClickHouse database name. If omitted, the user's default database on the ClickHouse server is used.
  */
  "database"?: string;
  /**
   * When `true`, enables flexible DateTime parsing on the ClickHouse server side.
  */
  "dateTimeBestEffort"?: boolean;
  /**
   * Name of the environment variable or secret that contains the ClickHouse HTTP endpoint URL.
   * Defaults to `DESTINATION_CLICKHOUSE_ENDPOINT_URL` (prefixed with `DD_OP_` at runtime).
  */
  "endpointUrlKey"?: string;
  /**
   * Insert format for events sent to ClickHouse.
   * - `json_each_row`: Maps event fields to columns by name (ClickHouse `JSONEachRow`).
   * - `json_as_object`: Inserts each event into a single `Object('json')` / `JSON` column (ClickHouse `JSONAsObject`).
   * - `json_as_string`: Inserts each event into a single `String`-typed column as raw JSON (ClickHouse `JSONAsString`).
   * - `arrow_stream`: Batches events using Apache Arrow IPC streaming format. Requires `batch_encoding`.
  */
  "format"?: ObservabilityPipelineClickhouseDestinationFormat;
  /**
   * The unique identifier for this component.
  */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
  */
  "inputs": Array<string>;
  /**
   * When `true`, fields not present in the target table schema are dropped instead of causing insert errors.
   * When unset, the ClickHouse server's own `input_format_skip_unknown_fields` setting applies.
  */
  "skipUnknownFields"?: boolean;
  /**
   * Target ClickHouse table name. Events are inserted into this table.
  */
  "table": string;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
  */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The destination type. The value must be `clickhouse`.
  */
  "type": ObservabilityPipelineClickhouseDestinationType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "auth": {
      "baseName": "auth",
      "type": "ObservabilityPipelineClickhouseDestinationAuth",
    },
    "batch": {
      "baseName": "batch",
      "type": "ObservabilityPipelineClickhouseDestinationBatch",
    },
    "batchEncoding": {
      "baseName": "batch_encoding",
      "type": "ObservabilityPipelineClickhouseDestinationBatchEncoding",
    },
    "buffer": {
      "baseName": "buffer",
      "type": "ObservabilityPipelineBufferOptions",
    },
    "compression": {
      "baseName": "compression",
      "type": "ObservabilityPipelineClickhouseDestinationCompression",
    },
    "database": {
      "baseName": "database",
      "type": "string",
    },
    "dateTimeBestEffort": {
      "baseName": "date_time_best_effort",
      "type": "boolean",
    },
    "endpointUrlKey": {
      "baseName": "endpoint_url_key",
      "type": "string",
    },
    "format": {
      "baseName": "format",
      "type": "ObservabilityPipelineClickhouseDestinationFormat",
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "inputs": {
      "baseName": "inputs",
      "type": "Array<string>",
      "required": true,
    },
    "skipUnknownFields": {
      "baseName": "skip_unknown_fields",
      "type": "boolean",
    },
    "table": {
      "baseName": "table",
      "type": "string",
      "required": true,
    },
    "tls": {
      "baseName": "tls",
      "type": "ObservabilityPipelineTls",
    },
    "type": {
      "baseName": "type",
      "type": "ObservabilityPipelineClickhouseDestinationType",
      "required": true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ObservabilityPipelineClickhouseDestination.attributeTypeMap;

  }

  public constructor() {











  }
}









