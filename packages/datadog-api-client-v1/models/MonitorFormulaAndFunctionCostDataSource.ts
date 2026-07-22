/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Data source for cost queries.
*/

export type MonitorFormulaAndFunctionCostDataSource = typeof METRICS| typeof CLOUD_COST| typeof DATADOG_USAGE | UnparsedObject;
export const METRICS = 'metrics';
export const CLOUD_COST = 'cloud_cost';
export const DATADOG_USAGE = 'datadog_usage';