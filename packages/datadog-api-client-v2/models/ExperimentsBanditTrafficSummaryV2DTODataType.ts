/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Bandit traffic summary resource type.
 */

export type ExperimentsBanditTrafficSummaryV2DTODataType =
  | typeof BANDIT_TRAFFIC_SUMMARY
  | UnparsedObject;
export const BANDIT_TRAFFIC_SUMMARY = "bandit-traffic-summary";
