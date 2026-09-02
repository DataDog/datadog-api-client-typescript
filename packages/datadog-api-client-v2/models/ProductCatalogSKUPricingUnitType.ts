/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the tier's price applies per unit of usage or to a block of usage.
 */

export type ProductCatalogSKUPricingUnitType =
  | typeof BLOCK
  | typeof UNIT
  | UnparsedObject;
export const BLOCK = "block";
export const UNIT = "unit";
