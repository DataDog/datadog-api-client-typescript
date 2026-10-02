/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Recorded experiment outcome.
 */

export type ExperimentsExperimentV2DTODataAttributesConclusionOutcome =
  | typeof POSITIVE
  | typeof NEGATIVE
  | typeof NEUTRAL
  | typeof INCONCLUSIVE
  | typeof MISCONFIGURED
  | typeof UNKNOWN
  | UnparsedObject;
export const POSITIVE = "POSITIVE";
export const NEGATIVE = "NEGATIVE";
export const NEUTRAL = "NEUTRAL";
export const INCONCLUSIVE = "INCONCLUSIVE";
export const MISCONFIGURED = "MISCONFIGURED";
export const UNKNOWN = "UNKNOWN";
