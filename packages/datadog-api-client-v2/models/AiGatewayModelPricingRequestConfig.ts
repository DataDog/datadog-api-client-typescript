/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingCatalogRequestConfig } from "./AiGatewayModelPricingCatalogRequestConfig";
import { AiGatewayModelPricingCustomRequestConfig } from "./AiGatewayModelPricingCustomRequestConfig";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Pricing configuration accepted when setting model pricing.
 */

export type AiGatewayModelPricingRequestConfig =
  | AiGatewayModelPricingCustomRequestConfig
  | AiGatewayModelPricingCatalogRequestConfig
  | UnparsedObject;
