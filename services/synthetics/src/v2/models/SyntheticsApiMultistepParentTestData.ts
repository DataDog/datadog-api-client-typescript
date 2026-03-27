import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsApiMultistepParentTestAttributes } from "./SyntheticsApiMultistepParentTestAttributes";
import { SyntheticsApiMultistepParentTestType } from "./SyntheticsApiMultistepParentTestType";

/**
 * Data object for a parent API multistep test.
 */
export class SyntheticsApiMultistepParentTestData {
  /**
   * Attributes of a parent API multistep test.
   */
  "attributes"?: SyntheticsApiMultistepParentTestAttributes;
  /**
   * The public ID of the parent test.
   */
  "id"?: string;
  /**
   * Type of the parent test resource.
   */
  "type"?: SyntheticsApiMultistepParentTestType;
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
    attributes: {
      baseName: "attributes",
      type: "SyntheticsApiMultistepParentTestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsApiMultistepParentTestType",
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
    return SyntheticsApiMultistepParentTestData.attributeTypeMap;
  }

  public constructor() {}
}
