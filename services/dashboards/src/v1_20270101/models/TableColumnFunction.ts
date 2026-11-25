import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardInlineSchema47 } from "./DashboardInlineSchema47";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableColumnFunction {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "args"?: Array<DashboardInlineSchema47>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
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
      type: "Array<DashboardInlineSchema47>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableColumnFunction.attributeTypeMap;
  }

  public constructor() {}
}
