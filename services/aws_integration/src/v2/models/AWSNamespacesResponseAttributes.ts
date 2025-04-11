import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS Namespaces response attributes.
 */
export class AWSNamespacesResponseAttributes {
  /**
   * AWS CloudWatch namespace.
   */
  "namespaces": Array<string>;
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
    namespaces: {
      baseName: "namespaces",
      type: "Array<string>",
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
    return AWSNamespacesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
