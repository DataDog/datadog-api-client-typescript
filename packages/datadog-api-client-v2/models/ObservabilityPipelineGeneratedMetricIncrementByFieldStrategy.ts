/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Uses a numeric field in the log event as the metric increment.
*/

export type ObservabilityPipelineGeneratedMetricIncrementByFieldStrategy = typeof INCREMENT_BY_FIELD | UnparsedObject;
export const INCREMENT_BY_FIELD = 'increment_by_field';