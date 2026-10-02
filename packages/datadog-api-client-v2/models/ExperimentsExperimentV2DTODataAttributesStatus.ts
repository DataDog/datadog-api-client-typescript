/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Current stage in the experiment lifecycle.
 */

export type ExperimentsExperimentV2DTODataAttributesStatus =
  | typeof DRAFT
  | typeof SCHEDULED
  | typeof IN_PROGRESS
  | typeof READY_FOR_DECISION
  | typeof DECISION_MADE
  | typeof CANCELLED
  | typeof UNKNOWN
  | UnparsedObject;
export const DRAFT = "DRAFT";
export const SCHEDULED = "SCHEDULED";
export const IN_PROGRESS = "IN_PROGRESS";
export const READY_FOR_DECISION = "READY_FOR_DECISION";
export const DECISION_MADE = "DECISION_MADE";
export const CANCELLED = "CANCELLED";
export const UNKNOWN = "UNKNOWN";
