import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an AWS WIF intake mapping.
 */
export class AwsWifIntakeMappingAttributes {
  /**
   * The AWS IAM ARN pattern identifying the role or user permitted to obtain an intake API key.
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
    return AwsWifIntakeMappingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
