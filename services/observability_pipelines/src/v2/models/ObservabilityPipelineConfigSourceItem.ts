import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonDataFirehoseSource } from "./ObservabilityPipelineAmazonDataFirehoseSource";
import { ObservabilityPipelineAmazonS3Source } from "./ObservabilityPipelineAmazonS3Source";
import { ObservabilityPipelineDatadogAgentSource } from "./ObservabilityPipelineDatadogAgentSource";
import { ObservabilityPipelineFluentBitSource } from "./ObservabilityPipelineFluentBitSource";
import { ObservabilityPipelineFluentdSource } from "./ObservabilityPipelineFluentdSource";
import { ObservabilityPipelineGooglePubSubSource } from "./ObservabilityPipelineGooglePubSubSource";
import { ObservabilityPipelineHttpClientSource } from "./ObservabilityPipelineHttpClientSource";
import { ObservabilityPipelineHttpServerSource } from "./ObservabilityPipelineHttpServerSource";
import { ObservabilityPipelineKafkaSource } from "./ObservabilityPipelineKafkaSource";
import { ObservabilityPipelineLogstashSource } from "./ObservabilityPipelineLogstashSource";
import { ObservabilityPipelineRsyslogSource } from "./ObservabilityPipelineRsyslogSource";
import { ObservabilityPipelineSplunkHecSource } from "./ObservabilityPipelineSplunkHecSource";
import { ObservabilityPipelineSplunkTcpSource } from "./ObservabilityPipelineSplunkTcpSource";
import { ObservabilityPipelineSumoLogicSource } from "./ObservabilityPipelineSumoLogicSource";
import { ObservabilityPipelineSyslogNgSource } from "./ObservabilityPipelineSyslogNgSource";

/**
 * A data source for the pipeline.
 */
export type ObservabilityPipelineConfigSourceItem =
  | ObservabilityPipelineKafkaSource
  | ObservabilityPipelineDatadogAgentSource
  | ObservabilityPipelineSplunkTcpSource
  | ObservabilityPipelineSplunkHecSource
  | ObservabilityPipelineAmazonS3Source
  | ObservabilityPipelineFluentdSource
  | ObservabilityPipelineFluentBitSource
  | ObservabilityPipelineHttpServerSource
  | ObservabilityPipelineSumoLogicSource
  | ObservabilityPipelineRsyslogSource
  | ObservabilityPipelineSyslogNgSource
  | ObservabilityPipelineAmazonDataFirehoseSource
  | ObservabilityPipelineGooglePubSubSource
  | ObservabilityPipelineHttpClientSource
  | ObservabilityPipelineLogstashSource
  | UnparsedObject;
