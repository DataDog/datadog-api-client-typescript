/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The metric's type category.
*/

export type MetricTagConfigurationMetricTypeCategory = typeof NON_DISTRIBUTION| typeof DISTRIBUTION | UnparsedObject;
export const NON_DISTRIBUTION = 'non_distribution';
export const DISTRIBUTION = 'distribution';