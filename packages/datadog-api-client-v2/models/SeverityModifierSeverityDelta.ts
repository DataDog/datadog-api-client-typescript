/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The direction in which to shift the severity of matched findings by one rank.
 */

export type SeverityModifierSeverityDelta =
  | typeof UP_ONE
  | typeof DOWN_ONE
  | UnparsedObject;
export const UP_ONE = "up_one";
export const DOWN_ONE = "down_one";
