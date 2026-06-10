/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The lifecycle status of an ownership inference.
 */

export type OwnershipInferenceStatus =
  | typeof SUGGESTED
  | typeof PERSISTED
  | typeof OVERRIDDEN
  | typeof FAILED
  | typeof UNKNOWN
  | UnparsedObject;
export const SUGGESTED = "suggested";
export const PERSISTED = "persisted";
export const OVERRIDDEN = "overridden";
export const FAILED = "failed";
export const UNKNOWN = "unknown";
