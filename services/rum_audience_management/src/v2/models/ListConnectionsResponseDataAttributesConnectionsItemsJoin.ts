import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The join configuration describing how the data source is linked to the entity.
 */
export class ListConnectionsResponseDataAttributesConnectionsItemsJoin {
  /**
   * The entity attribute used as the join key to link records from the data source.
   */
  "attribute"?: string;
  /**
   * The type of join key used (for example, email or user_id).
   */
  "type"?: string;
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
    attribute: {
      baseName: "attribute",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return ListConnectionsResponseDataAttributesConnectionsItemsJoin.attributeTypeMap;
  }

  public constructor() {}
}
