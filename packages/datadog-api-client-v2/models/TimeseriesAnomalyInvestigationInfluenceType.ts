/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Kind of influence a tag has on a series.
 */

export type TimeseriesAnomalyInvestigationInfluenceType =
  | typeof SHAPE
  | typeof VALUE
  | UnparsedObject;
export const SHAPE = "shape";
export const VALUE = "value";
