import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS External ID response body.
 */
export class AWSNewExternalIDResponseAttributes {
  /**
   * AWS IAM External ID for associated role.
   */
  "externalId": string;
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
    externalId: {
      baseName: "external_id",
      type: "string",
      required: true,
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
    return AWSNewExternalIDResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
