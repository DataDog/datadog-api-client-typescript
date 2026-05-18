/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Dimension to group scores by.
 */

export type ScorecardScoresAggregation =
  | typeof BY_ENTITY
  | typeof BY_RULE
  | typeof BY_SCORECARD
  | typeof BY_TEAM
  | typeof BY_KIND
  | UnparsedObject;
export const BY_ENTITY = "by-entity";
export const BY_RULE = "by-rule";
export const BY_SCORECARD = "by-scorecard";
export const BY_TEAM = "by-team";
export const BY_KIND = "by-kind";
