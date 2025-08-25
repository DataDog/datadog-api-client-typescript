/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The Elasticsearch API version to use. Set to `auto` to auto-detect.
 */

export type ObservabilityPipelineElasticsearchDestinationApiVersion =
  | typeof AUTO
  | typeof V6
  | typeof V7
  | typeof V8
  | UnparsedObject;
export const AUTO = "auto";
export const V6 = "v6";
export const V7 = "v7";
export const V8 = "v8";
