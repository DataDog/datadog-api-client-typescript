import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating an AWS cloud authentication persona mapping
 */
export class AWSCloudAuthPersonaMappingCreateAttributes {
  /**
   * Datadog account identifier (email or handle) mapped to the AWS principal
   */
  "accountIdentifier": string;
  /**
   * AWS IAM ARN pattern to match for authentication
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
    return AWSCloudAuthPersonaMappingCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
