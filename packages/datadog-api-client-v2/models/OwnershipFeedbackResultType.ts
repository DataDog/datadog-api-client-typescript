/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the ownership feedback result resource. The value should always be `ownership_feedback_result`.
 */

export type OwnershipFeedbackResultType =
  | typeof OWNERSHIP_FEEDBACK_RESULT
  | UnparsedObject;
export const OWNERSHIP_FEEDBACK_RESULT = "ownership_feedback_result";
