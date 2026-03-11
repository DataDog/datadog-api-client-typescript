import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListConnectionsResponseDataAttributesConnectionsItems } from "./ListConnectionsResponseDataAttributesConnectionsItems";

/**
 * Attributes of the list connections response, containing the collection of data source connections.
 */
export class ListConnectionsResponseDataAttributes {
  /**
   * The list of data source connections configured for the entity.
   */
  "connections"?: Array<ListConnectionsResponseDataAttributesConnectionsItems>;
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
    connections: {
      baseName: "connections",
      type: "Array<ListConnectionsResponseDataAttributesConnectionsItems>",
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
    return ListConnectionsResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
