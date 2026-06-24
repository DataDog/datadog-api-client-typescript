/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineClickhouseDestinationCompressionAlgorithm } from "./ObservabilityPipelineClickhouseDestinationCompressionAlgorithm";
import { ObservabilityPipelineClickhouseDestinationCompressionObject } from "./ObservabilityPipelineClickhouseDestinationCompressionObject";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Compression setting for outbound HTTP requests to ClickHouse.
 * Can be specified as a shorthand string (`"gzip"` or `"none"`) or as an object
 * with an `algorithm` field and an optional `level` (gzip only, 1–9).
 */

export type ObservabilityPipelineClickhouseDestinationCompression =
  | ObservabilityPipelineClickhouseDestinationCompressionAlgorithm
  | ObservabilityPipelineClickhouseDestinationCompressionObject
  | UnparsedObject;
