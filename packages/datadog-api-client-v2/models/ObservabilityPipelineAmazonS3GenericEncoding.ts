/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3GenericEncodingJson } from "./ObservabilityPipelineAmazonS3GenericEncodingJson";
import { ObservabilityPipelineAmazonS3GenericEncodingParquet } from "./ObservabilityPipelineAmazonS3GenericEncodingParquet";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Encoding format for the destination.
 */

export type ObservabilityPipelineAmazonS3GenericEncoding =
  | ObservabilityPipelineAmazonS3GenericEncodingJson
  | ObservabilityPipelineAmazonS3GenericEncodingParquet
  | UnparsedObject;
