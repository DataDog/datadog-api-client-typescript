/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Where the change request is in its lifecycle.
 */

export type FeatureFlagChangeEventSuggestionLifecycleStatus =
  | typeof PENDING
  | typeof APPROVED
  | typeof APPLIED
  | typeof REJECTED
  | typeof DISCARDED
  | UnparsedObject;
export const PENDING = "pending";
export const APPROVED = "approved";
export const APPLIED = "applied";
export const REJECTED = "rejected";
export const DISCARDED = "discarded";
