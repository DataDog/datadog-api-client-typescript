/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The experience type of the dashboard.
 */

export type DashboardExperienceType =
  | typeof DEFAULT
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const DEFAULT = "default";
export const PRODUCT_ANALYTICS = "product_analytics";
