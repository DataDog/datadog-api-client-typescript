/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sankey widget with RUM data source.
 */

export type SankeyRumDataSource =
  | typeof RUM
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const RUM = "rum";
export const PRODUCT_ANALYTICS = "product_analytics";
