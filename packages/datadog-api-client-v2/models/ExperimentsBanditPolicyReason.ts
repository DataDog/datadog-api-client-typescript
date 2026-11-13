/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Why the policy was applied.
 */

export type ExperimentsBanditPolicyReason =
  | typeof ACTIVATION
  | typeof REFRESH
  | typeof ARM_CHANGE
  | typeof SCHEDULED_END
  | typeof STOP
  | UnparsedObject;
export const ACTIVATION = "ACTIVATION";
export const REFRESH = "REFRESH";
export const ARM_CHANGE = "ARM_CHANGE";
export const SCHEDULED_END = "SCHEDULED_END";
export const STOP = "STOP";
