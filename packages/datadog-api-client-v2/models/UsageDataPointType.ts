/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of shape of the data.
 */

export type UsageDataPointType = typeof USAGE_DATA_POINT | UnparsedObject;
export const USAGE_DATA_POINT = "usage_data_point";
