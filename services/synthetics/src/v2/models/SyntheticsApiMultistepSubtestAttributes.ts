import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a Synthetic API multistep subtest.
 */
export class SyntheticsApiMultistepSubtestAttributes {
  /**
   * Name of the subtest.
   */
  "name"?: string;
  /**
   * The public ID of the subtest.
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
    name: {
      baseName: "name",
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
    return SyntheticsApiMultistepSubtestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
