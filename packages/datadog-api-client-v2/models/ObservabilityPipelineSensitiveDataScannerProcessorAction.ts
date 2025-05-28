/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorActionHash } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionHash";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionRedact } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionRedact";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Defines what action to take when sensitive data is matched.
*/

export type ObservabilityPipelineSensitiveDataScannerProcessorAction = ObservabilityPipelineSensitiveDataScannerProcessorActionRedact | ObservabilityPipelineSensitiveDataScannerProcessorActionHash | ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact | UnparsedObject;