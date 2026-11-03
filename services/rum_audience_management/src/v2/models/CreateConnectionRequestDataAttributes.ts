import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateConnectionRequestDataAttributesFieldsItems } from "./CreateConnectionRequestDataAttributesFieldsItems";
import { ListConnectionsResponseDataAttributesConnectionsItemsDetails } from "./ListConnectionsResponseDataAttributesConnectionsItemsDetails";

/**
 * Attributes defining the data source connection, including join configuration and custom fields.
 */
export class CreateConnectionRequestDataAttributes {
  /**
   * Type-specific configuration of the connection. Only the field matching the connection type is set.
   */
  "details"?: ListConnectionsResponseDataAttributesConnectionsItemsDetails;
  /**
   * List of custom attribute fields to import from the data source.
   */
  "fields"?: Array<CreateConnectionRequestDataAttributesFieldsItems>;
  /**
   * The attribute in the data source used to join records with the entity.
   */
  "joinAttribute": string;
  /**
   * The type of join key used to link the data source to the entity (for example, email or user_id).
   */
  "joinType": string;
  /**
   * Additional key-value metadata associated with the connection.
   */
  "metadata"?: { [key: string]: string };
  /**
   * Display name of the connection.
   */
  "name"?: string;
  /**
   * The type of data source connection (for example, ref_table).
   */
  "type": string;
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
    details: {
      baseName: "details",
      type: "ListConnectionsResponseDataAttributesConnectionsItemsDetails",
    },
    fields: {
      baseName: "fields",
      type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    joinAttribute: {
      baseName: "join_attribute",
      type: "string",
      required: true,
    },
    joinType: {
      baseName: "join_type",
      type: "string",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: string; }",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
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
    return CreateConnectionRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
