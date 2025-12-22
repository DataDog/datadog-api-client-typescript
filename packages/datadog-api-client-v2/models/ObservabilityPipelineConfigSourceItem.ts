/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
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
import { ObservabilityPipelineSocketSource } from "./ObservabilityPipelineSocketSource";
import { ObservabilityPipelineSplunkHecSource } from "./ObservabilityPipelineSplunkHecSource";
import { ObservabilityPipelineSplunkTcpSource } from "./ObservabilityPipelineSplunkTcpSource";
import { ObservabilityPipelineSumoLogicSource } from "./ObservabilityPipelineSumoLogicSource";
import { ObservabilityPipelineSyslogNgSource } from "./ObservabilityPipelineSyslogNgSource";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
  | UnparsedObject;
