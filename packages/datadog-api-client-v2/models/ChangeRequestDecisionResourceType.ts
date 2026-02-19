/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Change request decision resource type.
 */

export type ChangeRequestDecisionResourceType =
  | typeof CHANGE_REQUEST_DECISION
  | UnparsedObject;
export const CHANGE_REQUEST_DECISION = "change_request_decision";
