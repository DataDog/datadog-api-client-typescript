/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The interface status
 */

export type InterfaceAttributesStatus =
  | typeof UP
  | typeof DOWN
  | typeof WARNING
  | typeof OFF
  | UnparsedObject;
export const UP = "up";
export const DOWN = "down";
export const WARNING = "warning";
export const OFF = "off";
