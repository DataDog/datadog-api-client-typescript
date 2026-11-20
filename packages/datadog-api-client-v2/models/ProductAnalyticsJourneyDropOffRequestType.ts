/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type identifier for a journey drop-off analysis request.
 */

export type ProductAnalyticsJourneyDropOffRequestType =
  | typeof JOURNEY_DROP_OFF_ANALYSIS_REQUEST
  | UnparsedObject;
export const JOURNEY_DROP_OFF_ANALYSIS_REQUEST =
  "journey_drop_off_analysis_request";
