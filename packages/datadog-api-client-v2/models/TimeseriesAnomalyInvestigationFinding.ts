/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationAnomalyFinding } from "./TimeseriesAnomalyInvestigationAnomalyFinding";
import { TimeseriesAnomalyInvestigationInfluentialTagFinding } from "./TimeseriesAnomalyInvestigationInfluentialTagFinding";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Deterministic explanation for a detected anomaly.
 */

export type TimeseriesAnomalyInvestigationFinding =
  | TimeseriesAnomalyInvestigationInfluentialTagFinding
  | TimeseriesAnomalyInvestigationAnomalyFinding
  | UnparsedObject;
