/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The processor type. The value must be `tag_cardinality_limit`.
 */

export type ObservabilityPipelineTagCardinalityLimitProcessorType =
  | typeof TAG_CARDINALITY_LIMIT
  | UnparsedObject;
export const TAG_CARDINALITY_LIMIT = "tag_cardinality_limit";
