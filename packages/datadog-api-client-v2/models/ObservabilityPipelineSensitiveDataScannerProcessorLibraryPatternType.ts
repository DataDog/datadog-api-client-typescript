/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Indicates that a predefined library pattern is used.
 */

export type ObservabilityPipelineSensitiveDataScannerProcessorLibraryPatternType =
  typeof LIBRARY | UnparsedObject;
export const LIBRARY = "library";
