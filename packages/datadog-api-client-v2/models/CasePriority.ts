/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Case priority
 */

export type CasePriority =
  | typeof NOT_DEFINED
  | typeof P1
  | typeof P2
  | typeof P3
  | typeof P4
  | typeof P5
  | UnparsedObject;
export const NOT_DEFINED = "NOT_DEFINED";
export const P1 = "P1";
export const P2 = "P2";
export const P3 = "P3";
export const P4 = "P4";
export const P5 = "P5";
