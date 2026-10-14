/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An explicit staleness status override. Omitted when no override is set.
 */

export type FeatureFlagStalenessStatusOverride =
  | typeof STALE
  | typeof PERMANENT
  | UnparsedObject;
export const STALE = "STALE";
export const PERMANENT = "PERMANENT";
