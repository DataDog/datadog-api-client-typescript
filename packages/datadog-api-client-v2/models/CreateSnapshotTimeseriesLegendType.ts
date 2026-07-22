/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The legend display type for timeseries widgets. A value of `none` hides the legend entirely; omitting the field lets the frontend choose automatically.
*/

export type CreateSnapshotTimeseriesLegendType = typeof COMPACT| typeof EXPANDED| typeof NONE | UnparsedObject;
export const COMPACT = 'compact';
export const EXPANDED = 'expanded';
export const NONE = 'none';