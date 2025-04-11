import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaType } from "./FormulaType";
import { WidgetSort } from "./WidgetSort";

/**
 * The formula to sort the widget by.
 */
export class WidgetFormulaSort {
  /**
   * The index of the formula to sort by.
   */
  "index": number;
  /**
   * Widget sorting methods.
   */
  "order": WidgetSort;
  /**
   * Set the sort type to formula.
   */
  "type": FormulaType;
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
    index: {
      baseName: "index",
      type: "number",
      required: true,
      format: "int64",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormulaType",
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
    return WidgetFormulaSort.attributeTypeMap;
  }

  public constructor() {}
}
