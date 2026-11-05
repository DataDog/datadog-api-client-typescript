/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Canonical model grouping resource type.
 */

export type AiGatewayModelsByCanonicalType =
  | typeof MODELS_BY_CANONICAL
  | UnparsedObject;
export const MODELS_BY_CANONICAL = "models-by-canonical";
