/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the change request.
 */

export type ChangeRequestChangeType =
  | typeof NORMAL
  | typeof STANDARD
  | typeof EMERGENCY
  | UnparsedObject;
export const NORMAL = "NORMAL";
export const STANDARD = "STANDARD";
export const EMERGENCY = "EMERGENCY";
