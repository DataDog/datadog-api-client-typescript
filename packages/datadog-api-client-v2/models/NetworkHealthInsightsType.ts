/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for network health insights. Always `network-health-insights`.
 */

export type NetworkHealthInsightsType =
  | typeof NETWORK_HEALTH_INSIGHTS
  | UnparsedObject;
export const NETWORK_HEALTH_INSIGHTS = "network-health-insights";
