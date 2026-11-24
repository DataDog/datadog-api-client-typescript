/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The generated metric attributes resource type.
 */

export type GeneratedMetricAttributesType =
  | typeof GENERATED_METRIC_ATTRIBUTES
  | UnparsedObject;
export const GENERATED_METRIC_ATTRIBUTES = "generated_metric_attributes";
