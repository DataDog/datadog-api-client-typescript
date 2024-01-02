/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of Cloud Cost Activity.
 */

export type CloudCostActivityType = typeof CLOUD_COST_ACTIVITY | UnparsedObject;
export const CLOUD_COST_ACTIVITY = "cloud_cost_activity";
