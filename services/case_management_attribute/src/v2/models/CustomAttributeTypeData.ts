import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomAttributeSelectOption } from "./CustomAttributeSelectOption";

/**
 * Type-specific configuration for the custom attribute. For SELECT-type attributes, this contains the list of allowed options.
 */
export class CustomAttributeTypeData {
  /**
   * Options for SELECT type custom attributes.
   */
  "options"?: Array<CustomAttributeSelectOption>;
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
    options: {
      baseName: "options",
      type: "Array<CustomAttributeSelectOption>",
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
    return CustomAttributeTypeData.attributeTypeMap;
  }

  public constructor() {}
}
