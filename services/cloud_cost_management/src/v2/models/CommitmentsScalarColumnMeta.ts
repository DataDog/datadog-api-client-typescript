import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsUnit } from "./CommitmentsUnit";

/**
 * Metadata for a scalar column, including unit information.
 */
export class CommitmentsScalarColumnMeta {
  /**
   * Unit metadata for a numeric metric.
   */
  "unit": CommitmentsUnit;
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
    unit: {
      baseName: "unit",
      type: "CommitmentsUnit",
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
    return CommitmentsScalarColumnMeta.attributeTypeMap;
  }

  public constructor() {}
}
