/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Indicates whether `estimated_change_in_volume` is available and, if not, why. `ok` indicates a fresh estimate.
 * `unindexed_tags` indicates that the matching rule uses tags that are not indexed for the metric.
 * `unavailable` indicates that the estimate is stale, was not computed, or could not be retrieved.
 */

export type TagIndexingRuleExemptionVolumeStatus =
  | typeof OK
  | typeof UNINDEXED_TAGS
  | typeof UNAVAILABLE
  | UnparsedObject;
export const OK = "ok";
export const UNINDEXED_TAGS = "unindexed_tags";
export const UNAVAILABLE = "unavailable";
