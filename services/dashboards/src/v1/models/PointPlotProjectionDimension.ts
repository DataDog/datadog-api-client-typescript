import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PointPlotDimension } from "./PointPlotDimension";

/**
 * Dimension mapping for the point plot projection.
 */
export class PointPlotProjectionDimension {
  /**
   * Alias for the column.
   */
  "alias"?: string;
  /**
   * Source column name from the dataset.
   */
  "column": string;
  /**
   * Dimension of the point plot.
   */
  "dimension": PointPlotDimension;
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
    alias: {
      baseName: "alias",
      type: "string",
    },
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    dimension: {
      baseName: "dimension",
      type: "PointPlotDimension",
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
    return PointPlotProjectionDimension.attributeTypeMap;
  }

  public constructor() {}
}
