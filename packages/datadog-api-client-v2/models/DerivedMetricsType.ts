/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The derived metric resource type.
 */

export type DerivedMetricsType = typeof DERIVED_METRICS | UnparsedObject;
export const DERIVED_METRICS = "derived_metrics";
