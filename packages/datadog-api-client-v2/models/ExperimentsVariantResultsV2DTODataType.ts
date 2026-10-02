/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Experiment variant results resource type.
 */

export type ExperimentsVariantResultsV2DTODataType =
  | typeof EXPERIMENT_VARIANT_RESULTS
  | UnparsedObject;
export const EXPERIMENT_VARIANT_RESULTS = "experiment-variant-results";
