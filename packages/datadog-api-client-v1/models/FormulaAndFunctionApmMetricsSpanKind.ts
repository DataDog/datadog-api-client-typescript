/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Describes the relationship between the span, its parents, and its children in a trace.
 */

export type FormulaAndFunctionApmMetricsSpanKind =
  | typeof CONSUMER
  | typeof SERVER
  | typeof CLIENT
  | typeof PRODUCER
  | typeof INTERNAL
  | UnparsedObject;
export const CONSUMER = "consumer";
export const SERVER = "server";
export const CLIENT = "client";
export const PRODUCER = "producer";
export const INTERNAL = "internal";
