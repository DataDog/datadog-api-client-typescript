/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Performance metric used to filter view instances by threshold.
 */

export type AggregatedWaterfallPerformanceCriteriaMetric =
  | typeof LOADING_TIME
  | typeof LARGEST_CONTENTFUL_PAINT
  | typeof FIRST_CONTENTFUL_PAINT
  | typeof INTERACTION_TO_NEXT_PAINT
  | UnparsedObject;
export const LOADING_TIME = "loading_time";
export const LARGEST_CONTENTFUL_PAINT = "largest_contentful_paint";
export const FIRST_CONTENTFUL_PAINT = "first_contentful_paint";
export const INTERACTION_TO_NEXT_PAINT = "interaction_to_next_paint";
