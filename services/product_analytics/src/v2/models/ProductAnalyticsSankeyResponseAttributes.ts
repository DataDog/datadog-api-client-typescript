import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsSankeyLink } from "./ProductAnalyticsSankeyLink";
import { ProductAnalyticsSankeyNode } from "./ProductAnalyticsSankeyNode";

export class ProductAnalyticsSankeyResponseAttributes {
  /**
   * The links (flows) between nodes.
   */
  "links"?: Array<ProductAnalyticsSankeyLink>;
  /**
   * The nodes (pages) in the Sankey diagram.
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
