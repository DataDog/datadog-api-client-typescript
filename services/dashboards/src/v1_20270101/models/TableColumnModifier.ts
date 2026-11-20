import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardInlineSchema48 } from "./DashboardInlineSchema48";
import { TableColumnModifierName } from "./TableColumnModifierName";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableColumnModifier {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "args"?: Array<DashboardInlineSchema48>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": TableColumnModifierName;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    args: {
      baseName: "args",
      type: "Array<DashboardInlineSchema48>",
    },
    name: {
      baseName: "name",
      type: "TableColumnModifierName",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableColumnModifier.attributeTypeMap;
  }

  public constructor() {}
}
