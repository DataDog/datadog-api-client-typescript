/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Status group of the case.
 */

export type CaseStatusGroup =
  | typeof SG_OPEN
  | typeof SG_IN_PROGRESS
  | typeof SG_CLOSED
  | UnparsedObject;
export const SG_OPEN = "SG_OPEN";
export const SG_IN_PROGRESS = "SG_IN_PROGRESS";
export const SG_CLOSED = "SG_CLOSED";
