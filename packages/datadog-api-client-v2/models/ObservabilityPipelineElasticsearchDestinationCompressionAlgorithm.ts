/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The compression algorithm applied when sending data to Elasticsearch.
 */

export type ObservabilityPipelineElasticsearchDestinationCompressionAlgorithm =
  | typeof NONE
  | typeof GZIP
  | typeof ZLIB
  | typeof ZSTD
  | typeof SNAPPY
  | UnparsedObject;
export const NONE = "none";
export const GZIP = "gzip";
export const ZLIB = "zlib";
export const ZSTD = "zstd";
export const SNAPPY = "snappy";
