/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The alert type of events generated from the email address.
 */

export type EventEmailAddressAlertType =
  | typeof INFO
  | typeof WARN
  | typeof ERROR
  | typeof SUCCESS
  | UnparsedObject;
export const INFO = "info";
export const WARN = "warn";
export const ERROR = "error";
export const SUCCESS = "success";
