import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsSankeyAggregatedNode } from "./ProductAnalyticsSankeyAggregatedNode";
import { ProductAnalyticsSankeyNodeType } from "./ProductAnalyticsSankeyNodeType";

/**
 * A node of the Sankey diagram, representing one facet value in one column.
 */
export class ProductAnalyticsSankeyNode {
  /**
   * The nodes rolled up into this one, when the node is an aggregate.
   */
  "aggregatedNodes"?: Array<ProductAnalyticsSankeyAggregatedNode>;
  /**
   * Zero-based index of the column the node sits in.
   */
  "column"?: number;
  /**
   * Number of sessions that ended at the node.
   */
  "dropoffValue"?: number;
  /**
   * Unique identifier for the node.
   */
  "id"?: string;
  /**
   * Number of sessions entering the node.
   */
  "incomingValue"?: number;
  /**
   * The facet value the node represents.
   */
  "name"?: string;
  /**
   * Number of sessions leaving the node.
   */
  "outgoingValue"?: number;
  /**
   * The kind of node. `regular` is a single facet value, `other` rolls up the values that did not
   * fit within `entries_per_step`, and `dropoff` collects the sessions that ended at this column.
   */
  "type"?: ProductAnalyticsSankeyNodeType;
  /**
   * Number of sessions passing through the node.
   */
  "value"?: number;
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
    aggregatedNodes: {
      baseName: "aggregated_nodes",
      type: "Array<ProductAnalyticsSankeyAggregatedNode>",
    },
    column: {
      baseName: "column",
      type: "number",
      format: "int64",
    },
    dropoffValue: {
      baseName: "dropoff_value",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    incomingValue: {
      baseName: "incoming_value",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    outgoingValue: {
      baseName: "outgoing_value",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsSankeyNodeType",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "int64",
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
    return ProductAnalyticsSankeyNode.attributeTypeMap;
  }

  public constructor() {}
}
