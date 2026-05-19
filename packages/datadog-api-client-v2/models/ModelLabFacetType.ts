/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of facet for filtering Model Lab runs.
 */

export type ModelLabFacetType =
  | typeof PARAMETER
  | typeof ATTRIBUTE
  | typeof TAG
  | typeof METRIC
  | UnparsedObject;
export const PARAMETER = "parameter";
export const ATTRIBUTE = "attribute";
export const TAG = "tag";
export const METRIC = "metric";
