/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The processor type. The value must be `rename_metric_tags`.
 */

export type ObservabilityPipelineRenameMetricTagsProcessorType =
  | typeof RENAME_METRIC_TAGS
  | UnparsedObject;
export const RENAME_METRIC_TAGS = "rename_metric_tags";
