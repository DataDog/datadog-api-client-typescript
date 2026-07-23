/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Controls whether a scheduled workflow run may start while another instance is still running.
 */

export type ScheduleTriggerOverlapBehavior =
  | typeof EXCLUSIVE_RUN
  | typeof OVERLAP_ALLOWED
  | UnparsedObject;
export const EXCLUSIVE_RUN = "EXCLUSIVE_RUN";
export const OVERLAP_ALLOWED = "OVERLAP_ALLOWED";
