/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of commitment. ri for Reserved Instances, sp for Savings Plans.
 */

export type CommitmentsCommitmentType =
  | typeof RESERVED_INSTANCES
  | typeof SAVINGS_PLANS
  | UnparsedObject;
export const RESERVED_INSTANCES = "ri";
export const SAVINGS_PLANS = "sp";
