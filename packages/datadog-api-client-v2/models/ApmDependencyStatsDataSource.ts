/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A data source for APM dependency statistics queries.
 */

export type ApmDependencyStatsDataSource =
  | typeof APM_DEPENDENCY_STATS
  | UnparsedObject;
export const APM_DEPENDENCY_STATS = "apm_dependency_stats";
