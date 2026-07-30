/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of a step within a RUM operation's journey.
 */

export type RUMOperationJourneyStepType =
  | typeof START
  | typeof UPDATE
  | typeof STOP
  | typeof ERROR
  | typeof ABANDONED
  | UnparsedObject;
export const START = "start";
export const UPDATE = "update";
export const STOP = "stop";
export const ERROR = "error";
export const ABANDONED = "abandoned";
