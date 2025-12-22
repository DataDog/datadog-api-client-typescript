/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureStorageDestination } from "./AzureStorageDestination";
import { MicrosoftSentinelDestination } from "./MicrosoftSentinelDestination";
import { ObservabilityPipelineAmazonOpenSearchDestination } from "./ObservabilityPipelineAmazonOpenSearchDestination";
import { ObservabilityPipelineAmazonS3Destination } from "./ObservabilityPipelineAmazonS3Destination";
import { ObservabilityPipelineAmazonSecurityLakeDestination } from "./ObservabilityPipelineAmazonSecurityLakeDestination";
import { ObservabilityPipelineCrowdStrikeNextGenSiemDestination } from "./ObservabilityPipelineCrowdStrikeNextGenSiemDestination";
import { ObservabilityPipelineDatadogLogsDestination } from "./ObservabilityPipelineDatadogLogsDestination";
import { ObservabilityPipelineDatadogMetricsDestination } from "./ObservabilityPipelineDatadogMetricsDestination";
import { ObservabilityPipelineElasticsearchDestination } from "./ObservabilityPipelineElasticsearchDestination";
import { ObservabilityPipelineGoogleChronicleDestination } from "./ObservabilityPipelineGoogleChronicleDestination";
import { ObservabilityPipelineGoogleCloudStorageDestination } from "./ObservabilityPipelineGoogleCloudStorageDestination";
import { ObservabilityPipelineGooglePubSubDestination } from "./ObservabilityPipelineGooglePubSubDestination";
import { ObservabilityPipelineHttpClientDestination } from "./ObservabilityPipelineHttpClientDestination";
import { ObservabilityPipelineNewRelicDestination } from "./ObservabilityPipelineNewRelicDestination";
import { ObservabilityPipelineOpenSearchDestination } from "./ObservabilityPipelineOpenSearchDestination";
import { ObservabilityPipelineRsyslogDestination } from "./ObservabilityPipelineRsyslogDestination";
import { ObservabilityPipelineSentinelOneDestination } from "./ObservabilityPipelineSentinelOneDestination";
import { ObservabilityPipelineSocketDestination } from "./ObservabilityPipelineSocketDestination";
import { ObservabilityPipelineSplunkHecDestination } from "./ObservabilityPipelineSplunkHecDestination";
import { ObservabilityPipelineSumoLogicDestination } from "./ObservabilityPipelineSumoLogicDestination";
import { ObservabilityPipelineSyslogNgDestination } from "./ObservabilityPipelineSyslogNgDestination";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A destination for the pipeline.
 */

export type ObservabilityPipelineConfigDestinationItem =
  | ObservabilityPipelineHttpClientDestination
  | ObservabilityPipelineAmazonOpenSearchDestination
  | ObservabilityPipelineAmazonS3Destination
  | ObservabilityPipelineAmazonSecurityLakeDestination
  | AzureStorageDestination
  | ObservabilityPipelineCrowdStrikeNextGenSiemDestination
  | ObservabilityPipelineDatadogLogsDestination
  | ObservabilityPipelineElasticsearchDestination
  | ObservabilityPipelineGoogleChronicleDestination
  | ObservabilityPipelineGoogleCloudStorageDestination
  | ObservabilityPipelineGooglePubSubDestination
  | MicrosoftSentinelDestination
  | ObservabilityPipelineNewRelicDestination
  | ObservabilityPipelineOpenSearchDestination
  | ObservabilityPipelineRsyslogDestination
  | ObservabilityPipelineSentinelOneDestination
  | ObservabilityPipelineSocketDestination
  | ObservabilityPipelineSplunkHecDestination
  | ObservabilityPipelineSumoLogicDestination
  | ObservabilityPipelineSyslogNgDestination
  | ObservabilityPipelineDatadogMetricsDestination
  | UnparsedObject;
