import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ObservabilityPipelineSensitiveDataScannerProcessorActionHash } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionHash";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionRedact } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionRedact";

/**
 * Defines what action to take when sensitive data is matched.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorAction =
  | ObservabilityPipelineSensitiveDataScannerProcessorActionRedact
  | ObservabilityPipelineSensitiveDataScannerProcessorActionHash
  | ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact
  | UnparsedObject;
