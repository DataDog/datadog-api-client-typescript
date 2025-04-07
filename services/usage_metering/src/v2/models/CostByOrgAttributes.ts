import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChargebackBreakdown } from "./ChargebackBreakdown";

/**
 * Cost attributes data.
 */
export class CostByOrgAttributes {
  /**
   * The account name.
   */
  "accountName"?: string;
  /**
   * The account public ID.
   */
  "accountPublicId"?: string;
  /**
   * List of charges data reported for the requested month.
   */
  "charges"?: Array<ChargebackBreakdown>;
  /**
   * The month requested.
   */
  "date"?: Date;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * The region of the Datadog instance that the organization belongs to.
   */
  "region"?: string;
  /**
   * The total cost of products for the month.
   */
  "totalCost"?: number;
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
    charges: {
      baseName: "charges",
      type: "Array<ChargebackBreakdown>",
    },
    date: {
      baseName: "date",
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "string",
    },
    totalCost: {
      baseName: "total_cost",
      type: "number",
      format: "double",
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
    return CostByOrgAttributes.attributeTypeMap;
  }

  public constructor() {}
}
