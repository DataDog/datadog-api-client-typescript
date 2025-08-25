/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * SASL mechanism used for Kafka authentication.
 */

export type ObservabilityPipelinePipelineKafkaSourceSaslMechanism =
  | typeof PLAIN
  | typeof SCRAMNOT_SHANOT_256
  | typeof SCRAMNOT_SHANOT_512
  | UnparsedObject;
export const PLAIN = "PLAIN";
export const SCRAMNOT_SHANOT_256 = "SCRAM-SHA-256";
export const SCRAMNOT_SHANOT_512 = "SCRAM-SHA-512";
