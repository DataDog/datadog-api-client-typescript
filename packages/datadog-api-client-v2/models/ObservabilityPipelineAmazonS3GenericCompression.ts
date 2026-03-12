/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3GenericCompressionGzip } from "./ObservabilityPipelineAmazonS3GenericCompressionGzip";
import { ObservabilityPipelineAmazonS3GenericCompressionSnappy } from "./ObservabilityPipelineAmazonS3GenericCompressionSnappy";
import { ObservabilityPipelineAmazonS3GenericCompressionZstd } from "./ObservabilityPipelineAmazonS3GenericCompressionZstd";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Compression algorithm applied to encoded logs.
 */

export type ObservabilityPipelineAmazonS3GenericCompression =
  | ObservabilityPipelineAmazonS3GenericCompressionZstd
  | ObservabilityPipelineAmazonS3GenericCompressionGzip
  | ObservabilityPipelineAmazonS3GenericCompressionSnappy
  | UnparsedObject;
