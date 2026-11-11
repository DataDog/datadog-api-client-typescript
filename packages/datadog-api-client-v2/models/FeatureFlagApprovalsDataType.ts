/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for feature flag approval settings.
 */

export type FeatureFlagApprovalsDataType =
  | typeof FEATURE_FLAG_APPROVALS
  | UnparsedObject;
export const FEATURE_FLAG_APPROVALS = "feature-flag-approvals";
