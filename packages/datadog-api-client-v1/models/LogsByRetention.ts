/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsByRetentionMonthlyUsage } from "./LogsByRetentionMonthlyUsage";
import { LogsByRetentionOrgs } from "./LogsByRetentionOrgs";
import { LogsRetentionAggSumUsage } from "./LogsRetentionAggSumUsage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing logs usage data broken down by retention period.
 */
export class LogsByRetention {
  /**
   * Indexed logs usage summary for each organization for each retention period with usage.
   */
  "orgs"?: LogsByRetentionOrgs;
  /**
   * Aggregated index logs usage for each retention period with usage.
   */
  "usage"?: Array<LogsRetentionAggSumUsage>;
  /**
   * Object containing a summary of indexed logs usage by retention period for a single month.
   */
  "usageByMonth"?: LogsByRetentionMonthlyUsage;

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
    orgs: {
      baseName: "orgs",
      type: "LogsByRetentionOrgs",
    },
    usage: {
      baseName: "usage",
      type: "Array<LogsRetentionAggSumUsage>",
    },
    usageByMonth: {
      baseName: "usage_by_month",
      type: "LogsByRetentionMonthlyUsage",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsByRetention.attributeTypeMap;
  }

  public constructor() {}
}
