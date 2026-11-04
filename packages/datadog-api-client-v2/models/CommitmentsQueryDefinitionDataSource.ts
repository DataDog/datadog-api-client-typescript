/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The data source of the query.
 */

export type CommitmentsQueryDefinitionDataSource =
  | typeof CLOUD_COST
  | typeof METRICS
  | UnparsedObject;
export const CLOUD_COST = "cloud_cost";
export const METRICS = "metrics";
