import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScalarAggregator } from "./ScalarAggregator";
import { TableColumnModifier } from "./TableColumnModifier";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ComputeTableColumnCompute {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "modifiers"?: Array<TableColumnModifier>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "property"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scalarAggregation"?: ScalarAggregator;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    modifiers: {
      baseName: "modifiers",
      type: "Array<TableColumnModifier>",
    },
    property: {
      baseName: "property",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    scalarAggregation: {
      baseName: "scalar_aggregation",
      type: "ScalarAggregator",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ComputeTableColumnCompute.attributeTypeMap;
  }

  public constructor() {}
}
