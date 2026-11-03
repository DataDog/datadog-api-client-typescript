/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsSankeyAggregatedNodeType } from "./ProductAnalyticsSankeyAggregatedNodeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * One of the nodes rolled up into an aggregated node, retained so the roll-up can be broken down.
 */
export class ProductAnalyticsSankeyAggregatedNode {
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
   * The resource type identifier for a node rolled up into an aggregated node.
   */
  "type"?: ProductAnalyticsSankeyAggregatedNodeType;
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
      type: "ProductAnalyticsSankeyAggregatedNodeType",
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
    return ProductAnalyticsSankeyAggregatedNode.attributeTypeMap;
  }

  public constructor() {}
}
