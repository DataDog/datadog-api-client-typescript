/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The codec used for batch encoding. Only `arrow_stream` is supported.
 */

export type ObservabilityPipelineClickhouseDestinationBatchEncodingCodec =
  | typeof ARROW_STREAM
  | UnparsedObject;
export const ARROW_STREAM = "arrow_stream";
