/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsJourneyNodeTarget } from "./ProductAnalyticsJourneyNodeTarget";
import { ProductAnalyticsJourneyPathTarget } from "./ProductAnalyticsJourneyPathTarget";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A reference to a step, or a range of steps, in the journey.
 * Use a `node` target to name a single step, or a `path` target to name the range
 * between two steps.
 */

export type ProductAnalyticsJourneyTarget =
  | ProductAnalyticsJourneyNodeTarget
  | ProductAnalyticsJourneyPathTarget
  | UnparsedObject;
