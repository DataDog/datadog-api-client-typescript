import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageLambdaHour } from "./UsageLambdaHour";

/**
 * Response containing the number of Lambda functions and sum of the invocations of all Lambda functions
 * for each hour for a given organization.
 */
export class UsageLambdaResponse {
  /**
   * Get hourly usage for Lambda.
   */
  "usage"?: Array<UsageLambdaHour>;
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
    usage: {
      baseName: "usage",
      type: "Array<UsageLambdaHour>",
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
    return UsageLambdaResponse.attributeTypeMap;
  }

  public constructor() {}
}
