/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type. The value must be `exclusion_filters`.
 */

export type RumExclusionFilterType = typeof EXCLUSION_FILTERS | UnparsedObject;
export const EXCLUSION_FILTERS = "exclusion_filters";
