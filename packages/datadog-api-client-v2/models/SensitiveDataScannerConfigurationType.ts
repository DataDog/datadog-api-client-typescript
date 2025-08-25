/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sensitive Data Scanner configuration type.
 */

export type SensitiveDataScannerConfigurationType =
  | typeof SENSITIVE_DATA_SCANNER_CONFIGURATIONS
  | UnparsedObject;
export const SENSITIVE_DATA_SCANNER_CONFIGURATIONS =
  "sensitive_data_scanner_configuration";
