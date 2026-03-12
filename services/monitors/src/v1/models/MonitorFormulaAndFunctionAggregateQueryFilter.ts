import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filter definition for aggregate filtered queries.
 */
export class MonitorFormulaAndFunctionAggregateQueryFilter {
  /**
   * Attribute from the base query to filter on.
   */
  "baseAttribute": string;
  /**
   * Whether to exclude matching records instead of including them.
   */
  "exclude"?: boolean;
  /**
   * Attribute from the filter query to match against.
   */
  "filterAttribute": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    baseAttribute: {
      baseName: "base_attribute",
      type: "string",
      required: true,
    },
    exclude: {
      baseName: "exclude",
      type: "boolean",
    },
    filterAttribute: {
      baseName: "filter_attribute",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionAggregateQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
