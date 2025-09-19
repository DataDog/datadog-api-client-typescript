import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomAttributeType } from "./CustomAttributeType";
import { CustomAttributeValuesUnion } from "./CustomAttributeValuesUnion";

/**
 * Custom attribute values
 */
export class CustomAttributeValue {
  /**
   * If true, value must be an array
   */
  "isMulti": boolean;
  /**
   * Custom attributes type
   */
  "type": CustomAttributeType;
  /**
   * Union of supported value for a custom attribute
   */
  "value": CustomAttributeValuesUnion;
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
    isMulti: {
      baseName: "is_multi",
      type: "boolean",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomAttributeType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "CustomAttributeValuesUnion",
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
    return CustomAttributeValue.attributeTypeMap;
  }

  public constructor() {}
}
