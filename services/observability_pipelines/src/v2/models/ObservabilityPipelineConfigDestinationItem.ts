import { UnparsedObject } from "@datadog/datadog-api-client";

import { AzureStorageDestination } from "./AzureStorageDestination";
import { MicrosoftSentinelDestination } from "./MicrosoftSentinelDestination";
import { ObservabilityPipelineAmazonOpenSearchDestination } from "./ObservabilityPipelineAmazonOpenSearchDestination";
import { ObservabilityPipelineAmazonS3Destination } from "./ObservabilityPipelineAmazonS3Destination";
import { ObservabilityPipelineCrowdStrikeNextGenSiemDestination } from "./ObservabilityPipelineCrowdStrikeNextGenSiemDestination";
import { ObservabilityPipelineDatadogLogsDestination } from "./ObservabilityPipelineDatadogLogsDestination";
import { ObservabilityPipelineElasticsearchDestination } from "./ObservabilityPipelineElasticsearchDestination";
import { ObservabilityPipelineGoogleChronicleDestination } from "./ObservabilityPipelineGoogleChronicleDestination";
import { ObservabilityPipelineGoogleCloudStorageDestination } from "./ObservabilityPipelineGoogleCloudStorageDestination";
import { ObservabilityPipelineNewRelicDestination } from "./ObservabilityPipelineNewRelicDestination";
import { ObservabilityPipelineOpenSearchDestination } from "./ObservabilityPipelineOpenSearchDestination";
import { ObservabilityPipelineRsyslogDestination } from "./ObservabilityPipelineRsyslogDestination";
import { ObservabilityPipelineSentinelOneDestination } from "./ObservabilityPipelineSentinelOneDestination";
import { ObservabilityPipelineSplunkHecDestination } from "./ObservabilityPipelineSplunkHecDestination";
import { ObservabilityPipelineSumoLogicDestination } from "./ObservabilityPipelineSumoLogicDestination";
import { ObservabilityPipelineSyslogNgDestination } from "./ObservabilityPipelineSyslogNgDestination";

/**
 * A destination for the pipeline.
 */
export type ObservabilityPipelineConfigDestinationItem =
  | ObservabilityPipelineDatadogLogsDestination
  | ObservabilityPipelineAmazonS3Destination
  | ObservabilityPipelineGoogleCloudStorageDestination
  | ObservabilityPipelineSplunkHecDestination
  | ObservabilityPipelineSumoLogicDestination
  | ObservabilityPipelineElasticsearchDestination
  | ObservabilityPipelineRsyslogDestination
  | ObservabilityPipelineSyslogNgDestination
  | AzureStorageDestination
  | MicrosoftSentinelDestination
  | ObservabilityPipelineGoogleChronicleDestination
  | ObservabilityPipelineNewRelicDestination
  | ObservabilityPipelineSentinelOneDestination
  | ObservabilityPipelineOpenSearchDestination
  | ObservabilityPipelineAmazonOpenSearchDestination
  | ObservabilityPipelineCrowdStrikeNextGenSiemDestination
  | UnparsedObject;
