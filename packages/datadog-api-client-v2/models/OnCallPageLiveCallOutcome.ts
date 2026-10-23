/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The outcome of a live call that has ended.
 */

export type OnCallPageLiveCallOutcome =
  | typeof SUCCESS_CALL_ANSWERED
  | typeof FAILURE_NO_RESPONDER
  | typeof FAILURE_CALLER_ABANDONED
  | typeof FAILURE_OUTSIDE_SUPPORT_HOURS
  | typeof FAILURE_INTERNAL_ERROR
  | UnparsedObject;
export const SUCCESS_CALL_ANSWERED = "success_call_answered";
export const FAILURE_NO_RESPONDER = "failure_no_responder";
export const FAILURE_CALLER_ABANDONED = "failure_caller_abandoned";
export const FAILURE_OUTSIDE_SUPPORT_HOURS = "failure_outside_support_hours";
export const FAILURE_INTERNAL_ERROR = "failure_internal_error";
