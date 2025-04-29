/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The processor type. The value should always be `sensitive_data_scanner`.
 */

export type ObservabilityPipelineSensitiveDataScannerProcessorType =
  | typeof SENSITIVE_DATA_SCANNER
  | UnparsedObject;
export const SENSITIVE_DATA_SCANNER = "sensitive_data_scanner";
