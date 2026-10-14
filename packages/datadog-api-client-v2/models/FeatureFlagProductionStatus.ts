/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of a feature flag across production environments.
 */

export type FeatureFlagProductionStatus =
  | typeof ENABLED
  | typeof DISABLED
  | typeof OVERRIDDEN
  | UnparsedObject;
export const ENABLED = "ENABLED";
export const DISABLED = "DISABLED";
export const OVERRIDDEN = "OVERRIDDEN";
