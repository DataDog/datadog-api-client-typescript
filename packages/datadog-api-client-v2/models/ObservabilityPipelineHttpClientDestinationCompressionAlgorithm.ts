/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The compression algorithm used for HTTP client destinations.
 */

export type ObservabilityPipelineHttpClientDestinationCompressionAlgorithm =
  | typeof GZIP
  | UnparsedObject;
export const GZIP = "gzip";
