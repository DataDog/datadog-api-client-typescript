/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

export type FunnelSuggestionRequestDataType =
  | typeof FUNNEL_SUGGESTION_REQUEST
  | UnparsedObject;
export const FUNNEL_SUGGESTION_REQUEST = "funnel_suggestion_request";
