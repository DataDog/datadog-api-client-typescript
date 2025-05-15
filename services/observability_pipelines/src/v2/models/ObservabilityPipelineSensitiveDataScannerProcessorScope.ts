import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorScopeAll } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeAll";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude";

/**
 * Determines which parts of the log the pattern-matching rule should be applied to.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorScope =
  | ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude
  | ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude
  | ObservabilityPipelineSensitiveDataScannerProcessorScopeAll
  | UnparsedObject;
