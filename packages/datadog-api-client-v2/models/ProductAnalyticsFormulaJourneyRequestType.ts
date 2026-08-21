/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type identifier for a journey timeseries or scalar request.
 */

export type ProductAnalyticsFormulaJourneyRequestType =
  | typeof FORMULA_JOURNEY_REQUEST
  | UnparsedObject;
export const FORMULA_JOURNEY_REQUEST = "formula_journey_request";
