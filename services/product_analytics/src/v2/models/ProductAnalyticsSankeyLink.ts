import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A link between two nodes in the Sankey diagram.
 */
export class ProductAnalyticsSankeyLink {
  /**
   * The step column of the source node.
   */
  "column"?: number;
  "id"?: string;
  /**
   * The source node ID.
   */
  "source"?: string;
  /**
   * The target node ID.
   */
  "target"?: string;
  /**
   * The number of sessions through this link.
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
    column: {
      baseName: "column",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
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
    return ProductAnalyticsSankeyLink.attributeTypeMap;
  }

  public constructor() {}
}
