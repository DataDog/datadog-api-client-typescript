/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Response with properties for each aggregated usage type.
 */
export class UsageBillableSummaryBody {
  /**
   * The total account usage.
   */
  "accountBillableUsage"?: number;
  /**
   * Elapsed usage hours for some billable product.
   */
  "elapsedUsageHours"?: number;
  /**
   * The first billable hour for the org.
   */
  "firstBillableUsageHour"?: Date;
  /**
   * The last billable hour for the org.
   */
  "lastBillableUsageHour"?: Date;
  /**
   * The number of units used within the billable timeframe.
   */
  "orgBillableUsage"?: number;
  /**
   * The percentage of account usage the org represents.
   */
  "percentageInAccount"?: number;
  /**
   * Units pertaining to the usage.
   */
  "usageUnit"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountBillableUsage: {
      baseName: "account_billable_usage",
      type: "number",
      format: "int64",
    },
    elapsedUsageHours: {
      baseName: "elapsed_usage_hours",
      type: "number",
      format: "int64",
    },
    firstBillableUsageHour: {
      baseName: "first_billable_usage_hour",
      type: "Date",
      format: "date-time",
    },
    lastBillableUsageHour: {
      baseName: "last_billable_usage_hour",
      type: "Date",
      format: "date-time",
    },
    orgBillableUsage: {
      baseName: "org_billable_usage",
      type: "number",
      format: "int64",
    },
    percentageInAccount: {
      baseName: "percentage_in_account",
      type: "number",
      format: "double",
    },
    usageUnit: {
      baseName: "usage_unit",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageBillableSummaryBody.attributeTypeMap;
  }

  public constructor() {}
}
