/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Data source for APM dependency stats queries.
*/

export type FormulaAndFunctionApmDependencyStatsDataSource = typeof APM_DEPENDENCY_STATS | UnparsedObject;
export const APM_DEPENDENCY_STATS = 'apm_dependency_stats';