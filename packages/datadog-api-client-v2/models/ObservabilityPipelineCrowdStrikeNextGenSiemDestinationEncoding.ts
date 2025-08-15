/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Encoding format for log events.
 */

export type ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding =
  | typeof JSON
  | typeof RAW_MESSAGE
  | UnparsedObject;
export const JSON = "json";
export const RAW_MESSAGE = "raw_message";
