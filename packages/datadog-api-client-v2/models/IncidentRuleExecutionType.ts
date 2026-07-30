/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The execution type of an incident rule.
 */

export type IncidentRuleExecutionType =
  | typeof SINGLE_EXECUTION
  | typeof MULTI_EXECUTION
  | UnparsedObject;
export const SINGLE_EXECUTION = 1;
export const MULTI_EXECUTION = 2;
