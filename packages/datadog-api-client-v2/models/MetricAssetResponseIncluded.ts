/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricDashboardAsset } from "./MetricDashboardAsset";
import { MetricMonitorAsset } from "./MetricMonitorAsset";
import { MetricNotebookAsset } from "./MetricNotebookAsset";
import { MetricSLOAsset } from "./MetricSLOAsset";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * List of included assets with full set of attributes.
*/

export type MetricAssetResponseIncluded = MetricDashboardAsset | MetricMonitorAsset | MetricNotebookAsset | MetricSLOAsset | UnparsedObject;