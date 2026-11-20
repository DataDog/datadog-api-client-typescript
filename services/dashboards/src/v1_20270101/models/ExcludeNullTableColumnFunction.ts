import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExcludeNullTableColumnFunctionName } from "./ExcludeNullTableColumnFunctionName";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ExcludeNullTableColumnFunction {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": ExcludeNullTableColumnFunctionName;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "ExcludeNullTableColumnFunctionName",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ExcludeNullTableColumnFunction.attributeTypeMap;
  }

  public constructor() {}
}
