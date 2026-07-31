/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The case event that activates the automation rule.
 */

export type AutomationRuleTriggerType =
  | typeof CASE_CREATED
  | typeof STATUS_TRANSITIONED
  | typeof ATTRIBUTE_VALUE_CHANGED
  | typeof EVENT_CORRELATION_SIGNAL_CORRELATED
  | typeof CASE_REVIEW_APPROVED
  | typeof COMMENT_ADDED
  | UnparsedObject;
export const CASE_CREATED = "CASE_CREATED";
export const STATUS_TRANSITIONED = "STATUS_TRANSITIONED";
export const ATTRIBUTE_VALUE_CHANGED = "ATTRIBUTE_VALUE_CHANGED";
export const EVENT_CORRELATION_SIGNAL_CORRELATED =
  "EVENT_CORRELATION_SIGNAL_CORRELATED";
export const CASE_REVIEW_APPROVED = "CASE_REVIEW_APPROVED";
export const COMMENT_ADDED = "COMMENT_ADDED";
