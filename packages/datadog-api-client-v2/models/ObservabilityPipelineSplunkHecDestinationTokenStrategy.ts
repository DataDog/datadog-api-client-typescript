/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Controls how the Splunk HEC token is supplied. Use `custom` to provide a token with `token_key`, or `from_source` to forward the token received from an upstream Splunk HEC source.
 */

export type ObservabilityPipelineSplunkHecDestinationTokenStrategy =
  | typeof CUSTOM
  | typeof FROM_SOURCE
  | UnparsedObject;
export const CUSTOM = "custom";
export const FROM_SOURCE = "from_source";
