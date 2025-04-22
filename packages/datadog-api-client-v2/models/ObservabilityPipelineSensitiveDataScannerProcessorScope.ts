/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeAll } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeAll";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorScope` object.
 */

export type ObservabilityPipelineSensitiveDataScannerProcessorScope =
  | ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude
  | ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude
  | ObservabilityPipelineSensitiveDataScannerProcessorScopeAll
  | UnparsedObject;
