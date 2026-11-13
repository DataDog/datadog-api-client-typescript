/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How a tier orders its targets. Omission preserves the saved same-position tier on update; null resets to configured. New tiers default to configured. The weighted_affinity ordering distributes first-choice assignments by relative target weights and accepts only model targets with an explicit provider, without repeated provider and model pairs in the same tier. The `classified` ordering is allowed only in the first tier and requires a classifier, destination rubrics, and one default destination. Its targets are model targets that each name one provider, not "*". Besides the default, it needs 1 to 9 destinations, each with a different rubric. Classified routing is in Preview: saving a classified tier returns 403 Forbidden unless the feature is enabled for the organization.
 */

export type AiGatewayNullableRoutingRuleTierOrdering =
  | typeof CONFIGURED
  | typeof WEIGHTED_AFFINITY
  | typeof CLASSIFIED
  | UnparsedObject;
export const CONFIGURED = "configured";
export const WEIGHTED_AFFINITY = "weighted_affinity";
export const CLASSIFIED = "classified";
