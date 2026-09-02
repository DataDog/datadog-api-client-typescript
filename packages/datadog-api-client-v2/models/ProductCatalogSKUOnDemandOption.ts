/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The billing frequency applied to on-demand usage of the SKU by default.
 */

export type ProductCatalogSKUOnDemandOption =
  | typeof HOURLY
  | typeof MONTHLY
  | UnparsedObject;
export const HOURLY = "hourly";
export const MONTHLY = "monthly";
