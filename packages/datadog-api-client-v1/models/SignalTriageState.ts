/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The new triage state of the signal.
 */

export type SignalTriageState =
  | typeof OPEN
  | typeof ARCHIVED
  | typeof UNDER_REVIEW
  | UnparsedObject;
export const OPEN = "open";
export const ARCHIVED = "archived";
export const UNDER_REVIEW = "under_review";
