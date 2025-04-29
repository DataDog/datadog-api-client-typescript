/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Action type that redacts part of the sensitive data while preserving a configurable number of characters, typically used for masking purposes (e.g., show last 4 digits of a credit card).
 */

export type ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction =
  typeof PARTIAL_REDACT | UnparsedObject;
export const PARTIAL_REDACT = "partial_redact";
