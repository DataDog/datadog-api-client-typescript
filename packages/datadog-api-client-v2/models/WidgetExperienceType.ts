/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Widget experience types that differentiate between the products using the specific widget.
 */

export type WidgetExperienceType =
  | typeof CCM_REPORTS
  | typeof LOGS_REPORTS
  | typeof CSV_REPORTS
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const CCM_REPORTS = "ccm_reports";
export const LOGS_REPORTS = "logs_reports";
export const CSV_REPORTS = "csv_reports";
export const PRODUCT_ANALYTICS = "product_analytics";
