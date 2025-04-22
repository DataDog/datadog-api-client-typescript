/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureStorageDestination } from "./AzureStorageDestination";
import { MicrosoftSentinelDestination } from "./MicrosoftSentinelDestination";
import { ObservabilityPipelineDatadogLogsDestination } from "./ObservabilityPipelineDatadogLogsDestination";
import { ObservabilityPipelineElasticsearchDestination } from "./ObservabilityPipelineElasticsearchDestination";
import { ObservabilityPipelineRsyslogDestination } from "./ObservabilityPipelineRsyslogDestination";
import { ObservabilityPipelineSumoLogicDestination } from "./ObservabilityPipelineSumoLogicDestination";
import { ObservabilityPipelineSyslogNgDestination } from "./ObservabilityPipelineSyslogNgDestination";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A destination for the pipeline.
 */

export type ObservabilityPipelineConfigDestinationItem =
  | ObservabilityPipelineDatadogLogsDestination
  | ObservabilityPipelineSumoLogicDestination
  | ObservabilityPipelineElasticsearchDestination
  | ObservabilityPipelineRsyslogDestination
  | ObservabilityPipelineSyslogNgDestination
  | AzureStorageDestination
  | MicrosoftSentinelDestination
  | UnparsedObject;
