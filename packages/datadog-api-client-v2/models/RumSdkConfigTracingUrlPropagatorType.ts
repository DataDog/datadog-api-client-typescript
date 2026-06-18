/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A trace propagator type.
 */

export type RumSdkConfigTracingUrlPropagatorType =
  | typeof DATADOG
  | typeof B3
  | typeof B3MULTI
  | typeof TRACECONTEXT
  | UnparsedObject;
export const DATADOG = "datadog";
export const B3 = "b3";
export const B3MULTI = "b3multi";
export const TRACECONTEXT = "tracecontext";
