/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How to handle logs that are missing one of the `partition_fields`. Options:
 * - `ignore`: Forward the event without applying spike protection.
 * - `default_bucket`: Assign the event to a default partition.
 */

export type ObservabilityPipelineSpikeProtectionProcessorActionWhenMissingPartitions =
  typeof IGNORE | typeof DEFAULT_BUCKET | UnparsedObject;
export const IGNORE = "ignore";
export const DEFAULT_BUCKET = "default_bucket";
