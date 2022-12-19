/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sensitive Data Scanner standard pattern type.
 */

export type SensitiveDataScannerStandardPatternType =
  | typeof SENSITIVE_DATA_SCANNER_STANDARD_PATTERN
  | UnparsedObject;
export const SENSITIVE_DATA_SCANNER_STANDARD_PATTERN =
  "sensitive_data_scanner_standard_pattern";
