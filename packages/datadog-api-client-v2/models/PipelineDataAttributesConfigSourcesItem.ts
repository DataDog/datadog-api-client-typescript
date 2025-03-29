/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatadogAgentSource } from "./DatadogAgentSource";
import { KafkaSource } from "./KafkaSource";

import { UnparsedObject } from "../../datadog-api-client-common/util";

export type PipelineDataAttributesConfigSourcesItem =
  | DatadogAgentSource
  | KafkaSource
  | UnparsedObject;
