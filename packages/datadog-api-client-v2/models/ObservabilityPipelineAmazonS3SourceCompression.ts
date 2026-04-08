/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Compression format for objects retrieved from the S3 bucket. Use `auto` to detect compression from the object's Content-Encoding header or file extension.
 */

export type ObservabilityPipelineAmazonS3SourceCompression =
  | typeof AUTO
  | typeof NONE
  | typeof GZIP
  | typeof ZSTD
  | UnparsedObject;
export const AUTO = "auto";
export const NONE = "none";
export const GZIP = "gzip";
export const ZSTD = "zstd";
