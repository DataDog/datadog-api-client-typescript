/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern } from "./ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern";
import { ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern } from "./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Pattern detection configuration for identifying sensitive data using either a custom regex or a library reference.
 */

export type ObservabilityPipelineSensitiveDataScannerProcessorPattern =
  | ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern
  | ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern
  | UnparsedObject;
