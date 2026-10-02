/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Experiment results refresh resource type.
 */

export type ExperimentsRefreshExperimentResultsV2DTODataType =
  | typeof EXPERIMENT_RESULTS_REFRESH
  | UnparsedObject;
export const EXPERIMENT_RESULTS_REFRESH = "experiment-results-refresh";
