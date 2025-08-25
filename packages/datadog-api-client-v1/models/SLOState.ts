/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * State of the SLO.
 */

export type SLOState =
  | typeof BREACHED
  | typeof WARNING
  | typeof OK
  | typeof NO_DATA
  | UnparsedObject;
export const BREACHED = "breached";
export const WARNING = "warning";
export const OK = "ok";
export const NO_DATA = "no_data";
