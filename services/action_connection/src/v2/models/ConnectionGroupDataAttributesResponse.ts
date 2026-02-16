import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a connection group.
 */
export class ConnectionGroupDataAttributesResponse {
  /**
   * List of connection IDs associated with the connection group.
   */
  "connections"?: Array<string>;
  /**
   * The creation timestamp of the connection group.
   */
  "createdAt": Date;
  /**
   * The description of the connection group.
   */
  "description"?: string;
  /**
   * The integration type of the connection group.
   */
  "integrationType": string;
  /**
   * Indicates if the connection group is marked as favorite.
   */
  "isFavorite": boolean;
  /**
   * The last updated timestamp of the connection group.
   */
  "lastUpdatedAt": Date;
  /**
   * The name of the connection group.
   */
  "name": string;
  /**
   * Tag keys associated with the connection group.
   */
  "tagKeys": Array<string>;
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
      type: "Array<string>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    integrationType: {
      baseName: "integration_type",
      type: "string",
      required: true,
    },
    isFavorite: {
      baseName: "is_favorite",
      type: "boolean",
      required: true,
    },
    lastUpdatedAt: {
      baseName: "last_updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tagKeys: {
      baseName: "tag_keys",
      type: "Array<string>",
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
    return ConnectionGroupDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
