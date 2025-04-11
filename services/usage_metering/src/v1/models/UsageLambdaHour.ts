import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Number of Lambda functions and sum of the invocations of all Lambda functions
 * for each hour for a given organization.
 */
export class UsageLambdaHour {
  /**
   * Contains the number of different functions for each region and AWS account.
   */
  "funcCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the sum of invocations of all functions.
   */
  "invocationsSum"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
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
    funcCount: {
      baseName: "func_count",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    invocationsSum: {
      baseName: "invocations_sum",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageLambdaHour.attributeTypeMap;
  }

  public constructor() {}
}
