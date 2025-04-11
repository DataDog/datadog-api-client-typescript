import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsMobileStepParamsElementUserLocatorValuesItems } from "./SyntheticsMobileStepParamsElementUserLocatorValuesItems";

/**
 * User locator to find the element.
 */
export class SyntheticsMobileStepParamsElementUserLocator {
  /**
   * Whether if the test should fail if the element cannot be found.
   */
  "failTestOnCannotLocate"?: boolean;
  /**
   * Values of the user locator.
   */
  "values"?: Array<SyntheticsMobileStepParamsElementUserLocatorValuesItems>;
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
    failTestOnCannotLocate: {
      baseName: "failTestOnCannotLocate",
      type: "boolean",
    },
    values: {
      baseName: "values",
      type: "Array<SyntheticsMobileStepParamsElementUserLocatorValuesItems>",
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
    return SyntheticsMobileStepParamsElementUserLocator.attributeTypeMap;
  }

  public constructor() {}
}
