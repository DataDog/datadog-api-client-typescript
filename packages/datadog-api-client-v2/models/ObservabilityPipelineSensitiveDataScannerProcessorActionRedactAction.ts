/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Action type that completely replaces the matched sensitive data with a fixed replacement string to remove all visibility.
 */

export type ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction =
  typeof REDACT | UnparsedObject;
export const REDACT = "redact";
