import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsMobileStepParamsElementUserLocatorValuesItemsType } from "./SyntheticsMobileStepParamsElementUserLocatorValuesItemsType";

/**
 * A single user locator object.
 */
export class SyntheticsMobileStepParamsElementUserLocatorValuesItems {
  /**
   * Type of a user locator.
   */
  "type"?: SyntheticsMobileStepParamsElementUserLocatorValuesItemsType;
  /**
   * Value of a user locator.
   */
  "value"?: string;
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
    type: {
      baseName: "type",
      type: "SyntheticsMobileStepParamsElementUserLocatorValuesItemsType",
    },
    value: {
      baseName: "value",
      type: "string",
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
    return SyntheticsMobileStepParamsElementUserLocatorValuesItems.attributeTypeMap;
  }

  public constructor() {}
}
