/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sort field for tag indexing rule exemptions.
 */

export type TagIndexingRuleExemptionSort =
  | typeof NAME
  | typeof NAME_DESCENDING
  | typeof ESTIMATED_CHANGE_IN_VOLUME
  | typeof ESTIMATED_CHANGE_IN_VOLUME_DESCENDING
  | UnparsedObject;
export const NAME = "name";
export const NAME_DESCENDING = "-name";
export const ESTIMATED_CHANGE_IN_VOLUME = "estimated_change_in_volume";
export const ESTIMATED_CHANGE_IN_VOLUME_DESCENDING =
  "-estimated_change_in_volume";
