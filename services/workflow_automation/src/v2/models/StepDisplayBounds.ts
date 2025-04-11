import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `StepDisplayBounds` object.
 */
export class StepDisplayBounds {
  /**
   * The `bounds` `x`.
   */
  "x"?: number;
  /**
   * The `bounds` `y`.
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
    return StepDisplayBounds.attributeTypeMap;
  }

  public constructor() {}
}
