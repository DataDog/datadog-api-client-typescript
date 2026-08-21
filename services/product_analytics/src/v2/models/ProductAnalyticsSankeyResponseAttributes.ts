import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsSankeyLink } from "./ProductAnalyticsSankeyLink";
import { ProductAnalyticsSankeyNode } from "./ProductAnalyticsSankeyNode";

/**
 * Attributes of a Sankey response, containing the nodes and the links between them.
 */
export class ProductAnalyticsSankeyResponseAttributes {
  /**
   * The links of the diagram, one per pair of connected nodes.
   */
  "links"?: Array<ProductAnalyticsSankeyLink>;
  /**
   * The nodes of the diagram, one per facet value and column.
   */
  "nodes"?: Array<ProductAnalyticsSankeyNode>;
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
    links: {
      baseName: "links",
      type: "Array<ProductAnalyticsSankeyLink>",
    },
    nodes: {
      baseName: "nodes",
      type: "Array<ProductAnalyticsSankeyNode>",
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
    return ProductAnalyticsSankeyResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
