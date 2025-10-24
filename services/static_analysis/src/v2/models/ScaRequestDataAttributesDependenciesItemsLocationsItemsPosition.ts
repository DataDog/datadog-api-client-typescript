import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition {
  "col"?: number;
  "line"?: number;
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
    col: {
      baseName: "col",
      type: "number",
      format: "int32",
    },
    line: {
      baseName: "line",
      type: "number",
      format: "int32",
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
    return ScaRequestDataAttributesDependenciesItemsLocationsItemsPosition.attributeTypeMap;
  }

  public constructor() {}
}
