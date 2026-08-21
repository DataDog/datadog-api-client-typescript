/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The kind of node. `regular` is a single facet value, `other` rolls up the values that did not
 * fit within `entries_per_step`, and `dropoff` collects the sessions that ended at this column.
 */

export type ProductAnalyticsSankeyNodeType =
  | typeof REGULAR
  | typeof OTHER
  | typeof DROPOFF
  | UnparsedObject;
export const REGULAR = "regular";
export const OTHER = "other";
export const DROPOFF = "dropoff";
