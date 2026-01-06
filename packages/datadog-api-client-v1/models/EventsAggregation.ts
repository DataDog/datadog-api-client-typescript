/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsAggregationValue } from "./EventsAggregationValue";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of aggregation that can be performed on events-based queries.
 */

export type EventsAggregation =
  | EventsAggregationValue
  | string
  | UnparsedObject;
