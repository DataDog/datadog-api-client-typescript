import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A description of a single position for a `flick` step type.
 */
export class SyntheticsMobileStepParamsPositionsItems {
  /**
   * The `x` position for the flick.
   */
  "x"?: number;
  /**
   * The `y` position for the flick.
   */
  "y"?: number;
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
    x: {
      baseName: "x",
      type: "number",
      format: "double",
    },
    y: {
      baseName: "y",
      type: "number",
      format: "double",
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
    return SyntheticsMobileStepParamsPositionsItems.attributeTypeMap;
  }

  public constructor() {}
}
