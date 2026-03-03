import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageBillableSummaryKeys } from "./UsageBillableSummaryKeys";

/**
 * Response with monthly summary of data billed by Datadog.
 */
export class UsageBillableSummaryHour {
  /**
   * The account name.
   */
  "accountName"?: string;
  /**
   * The account public ID.
   */
  "accountPublicId"?: string;
  /**
   * The billing plan (metadata). (Deprecated from May 2026)
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
    accountName: {
      baseName: "account_name",
      type: "string",
    },
    accountPublicId: {
      baseName: "account_public_id",
      type: "string",
    },
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
