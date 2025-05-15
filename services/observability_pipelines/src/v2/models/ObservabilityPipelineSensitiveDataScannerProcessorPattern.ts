import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern } from "./ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern";
import { ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern } from "./ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern";

/**
 * Pattern detection configuration for identifying sensitive data using either a custom regex or a library reference.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorPattern =
  | ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern
  | ObservabilityPipelineSensitiveDataScannerProcessorLibraryPattern
  | UnparsedObject;
