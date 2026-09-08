/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Outcome of optional influential-tag enrichment.
 */

export type TimeseriesAnomalyInvestigationTagAnalysisStatus =
  | typeof COMPLETE
  | typeof UNSUPPORTED
  | typeof FAILED
  | UnparsedObject;
export const COMPLETE = "complete";
export const UNSUPPORTED = "unsupported";
export const FAILED = "failed";
