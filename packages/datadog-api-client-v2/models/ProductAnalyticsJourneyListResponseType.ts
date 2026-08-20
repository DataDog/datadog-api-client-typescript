/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type identifier for a journey list response.
 */

export type ProductAnalyticsJourneyListResponseType =
  | typeof JOURNEY_LIST_RESPONSE
  | UnparsedObject;
export const JOURNEY_LIST_RESPONSE = "journey_list_response";
