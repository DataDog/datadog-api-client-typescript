/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the alert.
 */

export type AlertEventCustomAttributesStatus =
  | typeof WARN
  | typeof ERROR
  | typeof OK
  | UnparsedObject;
export const WARN = "warn";
export const ERROR = "error";
export const OK = "ok";
