/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Action taken when request rate exceeds the limit.
 */

export type AiGatewayRateLimitMode =
  | typeof ALERT
  | typeof ENFORCE
  | UnparsedObject;
export const ALERT = "ALERT";
export const ENFORCE = "ENFORCE";
