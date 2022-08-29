/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageBillableSummaryKeys } from "./UsageBillableSummaryKeys";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with monthly summary of data billed by Datadog.
 */
export class UsageBillableSummaryHour {
  /**
   * The billing plan.
   */
  "billingPlan"?: string;
  /**
   * Shows the last date of usage.
   */
  "endDate"?: Date;
  /**
   * The number of organizations.
   */
  "numOrgs"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * Shows usage aggregation for a billing period.
   */
  "ratioInMonth"?: number;
  /**
   * The region of the organization.
   */
  "region"?: string;
  /**
   * Shows the first date of usage.
   */
  "startDate"?: Date;
  /**
   * Response with aggregated usage types.
   */
  "usage"?: UsageBillableSummaryKeys;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    billingPlan: {
      baseName: "billing_plan",
      type: "string",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    numOrgs: {
      baseName: "num_orgs",
      type: "number",
      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    ratioInMonth: {
      baseName: "ratio_in_month",
      type: "number",
      format: "double",
    },
    region: {
      baseName: "region",
      type: "string",
    },
    startDate: {
      baseName: "start_date",
      type: "Date",
      format: "date-time",
    },
    usage: {
      baseName: "usage",
      type: "UsageBillableSummaryKeys",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageBillableSummaryHour.attributeTypeMap;
  }

  public constructor() {}
}
