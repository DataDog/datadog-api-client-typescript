/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Byte frames which are chunked GELF messages.
 */

export type ObservabilityPipelineSocketSourceFramingChunkedGelfMethod =
  | typeof CHUNKED_GELF
  | UnparsedObject;
export const CHUNKED_GELF = "chunked_gelf";
