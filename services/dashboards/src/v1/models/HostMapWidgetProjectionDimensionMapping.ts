import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HostMapWidgetDimension } from "./HostMapWidgetDimension";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Maps a dataset column to a host map visual dimension.
 */
export class HostMapWidgetProjectionDimensionMapping {
  /**
   * Alias used to label the column instead of its name.
   */
  "alias"?: string;
  /**
   * Source column name from the dataset.
   */
  "column": string;
  /**
   * Visual dimension for the host map widget. Used both by infrastructure-backed formulas and by DDSQL projection columns; `group` is only meaningful for DDSQL projection columns, where repeated entries define the grouping hierarchy.
   */
  "dimension": HostMapWidgetDimension;
  /**
   * Number format options for the widget.
   */
  "numberFormat"?: WidgetNumberFormat;
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
      type: "HostMapWidgetDimension",
      required: true,
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
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
    return HostMapWidgetProjectionDimensionMapping.attributeTypeMap;
  }

  public constructor() {}
}
