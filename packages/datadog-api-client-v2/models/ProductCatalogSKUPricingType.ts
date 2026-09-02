/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the SKU is priced. `usage` prices each billable usage unit, and `percent` prices a
 * percentage; percent-priced SKUs have no `billing_units`.
 */

export type ProductCatalogSKUPricingType =
  | typeof USAGE
  | typeof PERCENT
  | UnparsedObject;
export const USAGE = "usage";
export const PERCENT = "percent";
