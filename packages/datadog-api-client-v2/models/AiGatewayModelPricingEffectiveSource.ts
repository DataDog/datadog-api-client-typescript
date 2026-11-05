/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Effective source of the model pricing data.
 */

export type AiGatewayModelPricingEffectiveSource =
  | typeof CATALOG_AUTO
  | typeof MODEL_OVERRIDE
  | typeof UNKNOWN
  | UnparsedObject;
export const CATALOG_AUTO = "catalog_auto";
export const MODEL_OVERRIDE = "model_override";
export const UNKNOWN = "unknown";
