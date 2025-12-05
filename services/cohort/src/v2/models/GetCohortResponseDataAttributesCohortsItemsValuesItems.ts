import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class GetCohortResponseDataAttributesCohortsItemsValuesItems {
  "absoluteValue"?: number;
  "endTime"?: number;
  "relativeValue"?: number;
  "startTime"?: number;
  "window"?: number;
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
    absoluteValue: {
      baseName: "absolute_value",
      type: "number",
      format: "int64",
    },
    endTime: {
      baseName: "end_time",
      type: "number",
      format: "int64",
    },
    relativeValue: {
      baseName: "relative_value",
      type: "number",
      format: "double",
    },
    startTime: {
      baseName: "start_time",
      type: "number",
      format: "int64",
    },
    window: {
      baseName: "window",
      type: "number",
      format: "int64",
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
    return GetCohortResponseDataAttributesCohortsItemsValuesItems.attributeTypeMap;
  }

  public constructor() {}
}
