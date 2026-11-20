/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type identifier for a journey drop-off analysis response.
 */

export type ProductAnalyticsJourneyDropOffResponseType =
  | typeof JOURNEY_DROP_OFF_ANALYSIS_RESPONSE
  | UnparsedObject;
export const JOURNEY_DROP_OFF_ANALYSIS_RESPONSE =
  "journey_drop_off_analysis_response";
