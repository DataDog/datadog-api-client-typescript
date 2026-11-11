/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Lifecycle phase of the holdout. PENDING holdouts have not started including experiments. INCLUDING holdouts are adding experiments. WAITING_FOR_ANALYSIS holdouts have stopped including experiments but have not started analysis. ANALYSING holdouts are in their analysis window. COMPLETE applies only to EXTERNAL holdouts that have ended their analysis window but are not archived.
 */

export type ExperimentsExperimentHoldoutV2DTODataAttributesState =
  | typeof PENDING
  | typeof INCLUDING
  | typeof WAITING_FOR_ANALYSIS
  | typeof ANALYSING
  | typeof COMPLETE
  | typeof UNKNOWN
  | UnparsedObject;
export const PENDING = "PENDING";
export const INCLUDING = "INCLUDING";
export const WAITING_FOR_ANALYSIS = "WAITING_FOR_ANALYSIS";
export const ANALYSING = "ANALYSING";
export const COMPLETE = "COMPLETE";
export const UNKNOWN = "UNKNOWN";
