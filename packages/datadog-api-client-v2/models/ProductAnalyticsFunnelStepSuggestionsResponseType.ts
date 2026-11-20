/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of a step suggestions response.
 */

export type ProductAnalyticsFunnelStepSuggestionsResponseType =
  | typeof FUNNEL_SUGGESTIONS_STEPS_RESPONSE
  | UnparsedObject;
export const FUNNEL_SUGGESTIONS_STEPS_RESPONSE =
  "funnel_suggestions_steps_response";
