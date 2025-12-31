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
import { ObservabilityPipelineOpentelemetrySource } from "./ObservabilityPipelineOpentelemetrySource";
import { ObservabilityPipelineRsyslogSource } from "./ObservabilityPipelineRsyslogSource";
import { ObservabilityPipelineSocketSource } from "./ObservabilityPipelineSocketSource";
import { ObservabilityPipelineSplunkHecSource } from "./ObservabilityPipelineSplunkHecSource";
import { ObservabilityPipelineSplunkTcpSource } from "./ObservabilityPipelineSplunkTcpSource";
import { ObservabilityPipelineSumoLogicSource } from "./ObservabilityPipelineSumoLogicSource";
import { ObservabilityPipelineSyslogNgSource } from "./ObservabilityPipelineSyslogNgSource";

/**
 * A data source for the pipeline.
 */
export type ObservabilityPipelineConfigSourceItem =
  | ObservabilityPipelineDatadogAgentSource
  | ObservabilityPipelineAmazonDataFirehoseSource
  | ObservabilityPipelineAmazonS3Source
  | ObservabilityPipelineFluentBitSource
  | ObservabilityPipelineFluentdSource
  | ObservabilityPipelineGooglePubSubSource
  | ObservabilityPipelineHttpClientSource
  | ObservabilityPipelineHttpServerSource
  | ObservabilityPipelineKafkaSource
  | ObservabilityPipelineLogstashSource
  | ObservabilityPipelineRsyslogSource
  | ObservabilityPipelineSocketSource
  | ObservabilityPipelineSplunkHecSource
  | ObservabilityPipelineSplunkTcpSource
  | ObservabilityPipelineSumoLogicSource
  | ObservabilityPipelineSyslogNgSource
  | ObservabilityPipelineOpentelemetrySource
  | UnparsedObject;
