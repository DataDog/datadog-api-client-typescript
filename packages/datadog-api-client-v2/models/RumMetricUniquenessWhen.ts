/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * When to count updatable events. `match` when the event is first seen, or `end` when the event is complete.
 */

export type RumMetricUniquenessWhen =
  | typeof WHEN_MATCH
  | typeof WHEN_END
  | UnparsedObject;
export const WHEN_MATCH = "match";
export const WHEN_END = "end";
