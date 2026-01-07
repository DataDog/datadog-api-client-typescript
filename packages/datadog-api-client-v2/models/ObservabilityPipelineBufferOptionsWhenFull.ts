/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Behavior when the buffer is full (block and stop accepting new events, or drop new events)
 */

export type ObservabilityPipelineBufferOptionsWhenFull =
  | typeof BLOCK
  | typeof DROP_NEWEST
  | UnparsedObject;
export const BLOCK = "block";
export const DROP_NEWEST = "drop_newest";
