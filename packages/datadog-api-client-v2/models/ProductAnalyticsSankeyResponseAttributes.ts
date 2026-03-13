/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsSankeyLink } from "./ProductAnalyticsSankeyLink";
import { ProductAnalyticsSankeyNode } from "./ProductAnalyticsSankeyNode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
