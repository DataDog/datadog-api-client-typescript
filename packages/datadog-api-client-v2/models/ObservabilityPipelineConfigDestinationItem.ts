/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3Destination } from "./ObservabilityPipelineAmazonS3Destination";
import { ObservabilityPipelineDatadogLogsDestination } from "./ObservabilityPipelineDatadogLogsDestination";
import { ObservabilityPipelineGoogleCloudStorageDestination } from "./ObservabilityPipelineGoogleCloudStorageDestination";
import { ObservabilityPipelineSplunkHecDestination } from "./ObservabilityPipelineSplunkHecDestination";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A destination for the pipeline.
 */

export type ObservabilityPipelineConfigDestinationItem =
  | ObservabilityPipelineDatadogLogsDestination
  | ObservabilityPipelineAmazonS3Destination
  | ObservabilityPipelineGoogleCloudStorageDestination
  | ObservabilityPipelineSplunkHecDestination
  | UnparsedObject;
