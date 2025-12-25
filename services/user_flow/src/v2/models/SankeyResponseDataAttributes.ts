import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyResponseDataAttributesLinksItems } from "./SankeyResponseDataAttributesLinksItems";
import { SankeyResponseDataAttributesNodesItems } from "./SankeyResponseDataAttributesNodesItems";

export class SankeyResponseDataAttributes {
  "links"?: Array<SankeyResponseDataAttributesLinksItems>;
  "nodes"?: Array<SankeyResponseDataAttributesNodesItems>;
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
      type: "Array<SankeyResponseDataAttributesLinksItems>",
    },
    nodes: {
      baseName: "nodes",
      type: "Array<SankeyResponseDataAttributesNodesItems>",
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
    return SankeyResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
