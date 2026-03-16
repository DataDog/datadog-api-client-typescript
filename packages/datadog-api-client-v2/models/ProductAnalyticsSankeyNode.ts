/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsSankeyAggregatedNode } from "./ProductAnalyticsSankeyAggregatedNode";
import { ProductAnalyticsSankeyNodeType } from "./ProductAnalyticsSankeyNodeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A node in the Sankey diagram representing a page or aggregation.
 */
export class ProductAnalyticsSankeyNode {
  /**
   * Nodes aggregated into this node (for "other" type).
   */
  "aggregatedNodes"?: Array<ProductAnalyticsSankeyAggregatedNode>;
  /**
   * The step column (0-indexed).
   */
  "column"?: number;
  "dropoffValue"?: number;
  "id"?: string;
  "incomingValue"?: number;
  /**
   * The page name.
   */
  "name"?: string;
  "outgoingValue"?: number;
  /**
   * Node type.
   */
  "type"?: ProductAnalyticsSankeyNodeType;
  /**
   * The number of sessions through this node.
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
