import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCcmConfigValidationIssue } from "./AWSCcmConfigValidationIssue";

/**
 * Attributes for an AWS CCM config validation response.
 */
export class AWSCcmConfigValidationResponseAttributes {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId": string;
  /**
   * List of validation issues found for the Cost and Usage Report (CUR) 2.0 configuration. Empty when the configuration is valid.
   */
  "issues": Array<AWSCcmConfigValidationIssue>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    issues: {
      baseName: "issues",
      type: "Array<AWSCcmConfigValidationIssue>",
      required: true,
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
    return AWSCcmConfigValidationResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
