/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the enrollment.
 */

export type OnPremManagementServiceGetEnrollmentResponseAttributesStatus =
  | typeof NEW
  | typeof SUCCESS
  | typeof FAILED
  | UnparsedObject;
export const NEW = "new";
export const SUCCESS = "success";
export const FAILED = "failed";
