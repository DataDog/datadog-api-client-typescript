/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeAll } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeAll";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Determines which parts of the log the pattern-matching rule should be applied to.
*/

export type ObservabilityPipelineSensitiveDataScannerProcessorScope = ObservabilityPipelineSensitiveDataScannerProcessorScopeInclude | ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude | ObservabilityPipelineSensitiveDataScannerProcessorScopeAll | UnparsedObject;