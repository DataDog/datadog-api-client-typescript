/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Completeness of the matched source record. Partial also identifies metadata from a base model for a dated snapshot or from a shared canonical-model fallback.
 */

export type AiGatewayModelMetadataStatus =
  | typeof AVAILABLE
  | typeof PARTIAL
  | UnparsedObject;
export const AVAILABLE = "available";
export const PARTIAL = "partial";
