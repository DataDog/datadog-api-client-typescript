/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How a tier orders its targets. Omitted or null defaults to configured, which preserves target order. The weighted_affinity ordering distributes first-choice assignments by relative target weights and accepts only model targets with an explicit provider, without repeated provider and model pairs in the same tier.
 */

export type AiGatewayNullableRoutingRuleTierOrdering =
  | typeof CONFIGURED
  | typeof WEIGHTED_AFFINITY
  | UnparsedObject;
export const CONFIGURED = "configured";
export const WEIGHTED_AFFINITY = "weighted_affinity";
