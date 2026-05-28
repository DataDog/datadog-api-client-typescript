import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HostMapWidgetDimension } from "./HostMapWidgetDimension";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Formula for the infrastructure host map widget that specifies both the expression
 * and the visual dimension it populates.
 */
export class HostMapWidgetFormula {
  /**
   * Expression alias.
   */
  "alias"?: string;
  /**
   * Visual dimension driven by a formula in the infrastructure host map widget.
   */
  "dimension": HostMapWidgetDimension;
  /**
   * String expression built from queries, formulas, and functions.
   */
  "formula": string;
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
    dimension: {
      baseName: "dimension",
      type: "HostMapWidgetDimension",
      required: true,
    },
    formula: {
      baseName: "formula",
      type: "string",
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
    return HostMapWidgetFormula.attributeTypeMap;
  }

  public constructor() {}
}
