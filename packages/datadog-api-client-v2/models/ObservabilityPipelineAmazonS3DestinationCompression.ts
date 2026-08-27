/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3DestinationCompressionGzip } from "./ObservabilityPipelineAmazonS3DestinationCompressionGzip";
import { ObservabilityPipelineAmazonS3DestinationCompressionZstd } from "./ObservabilityPipelineAmazonS3DestinationCompressionZstd";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Compression configuration for archived logs. When omitted, logs are compressed with gzip
 * for backward compatibility.
 */

export type ObservabilityPipelineAmazonS3DestinationCompression =
  | ObservabilityPipelineAmazonS3DestinationCompressionZstd
  | ObservabilityPipelineAmazonS3DestinationCompressionGzip
  | UnparsedObject;
