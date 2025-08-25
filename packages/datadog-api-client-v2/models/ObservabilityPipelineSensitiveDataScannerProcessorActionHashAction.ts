/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Action type that replaces the matched sensitive data with a hashed representation, preserving structure while securing content.
 */

export type ObservabilityPipelineSensitiveDataScannerProcessorActionHashAction =
  typeof HASH | UnparsedObject;
export const HASH = "hash";
