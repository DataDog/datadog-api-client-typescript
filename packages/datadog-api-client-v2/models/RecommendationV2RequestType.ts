/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource type for the SPA v2 recommendation request.
 */

export type RecommendationV2RequestType =
  | typeof RECOMMENDATION_V2_REQUEST
  | UnparsedObject;
export const RECOMMENDATION_V2_REQUEST = "recommendation_v2_request";
