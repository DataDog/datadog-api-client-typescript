import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating an AWS WIF persona mapping.
 */
export class AwsWifPersonaMappingCreateAttributes {
  /**
   * The Datadog user handle (email address) to map the AWS principal to.
   */
  "accountIdentifier": string;
  /**
   * The AWS IAM ARN pattern identifying the role or user that will be mapped.
   * Supports wildcards (`*`) to match multiple principals within an account.
   */
  "arnPattern": string;
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
    accountIdentifier: {
      baseName: "account_identifier",
      type: "string",
      required: true,
    },
    arnPattern: {
      baseName: "arn_pattern",
      type: "string",
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
    return AwsWifPersonaMappingCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
