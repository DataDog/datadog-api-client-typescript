/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Source type for the pricing configuration.
 */

export type AiGatewayModelPricingSourceType =
  | typeof CATALOG
  | typeof CUSTOM
  | UnparsedObject;
export const CATALOG = "catalog";
export const CUSTOM = "custom";
