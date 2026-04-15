/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Request type for user journey funnel widget.
 */

export type ProductAnalyticsFunnelRequestType =
  | typeof USER_JOURNEY_FUNNEL
  | UnparsedObject;
export const USER_JOURNEY_FUNNEL = "user_journey_funnel";
