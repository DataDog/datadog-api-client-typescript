/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with properties for each aggregated usage type.
 */
export class UsageBillableSummaryBody {
  /**
   * The total account usage.
   */
  "accountBillableUsage"?: number;
  /**
   * The total account committed usage.
   */
  "accountCommittedUsage"?: number;
  /**
   * The total account on-demand usage.
   */
  "accountOnDemandUsage"?: number;
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
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountBillableUsage: {
      baseName: "account_billable_usage",
      type: "number",
      format: "int64",
    },
    accountCommittedUsage: {
      baseName: "account_committed_usage",
      type: "number",
      format: "int64",
    },
    accountOnDemandUsage: {
      baseName: "account_on_demand_usage",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
