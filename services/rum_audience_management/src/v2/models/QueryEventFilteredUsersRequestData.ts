import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryEventFilteredUsersRequestDataAttributes } from "./QueryEventFilteredUsersRequestDataAttributes";
import { QueryEventFilteredUsersRequestDataType } from "./QueryEventFilteredUsersRequestDataType";

/**
 * The data object containing the resource type and attributes for querying event-filtered users.
 */
export class QueryEventFilteredUsersRequestData {
  /**
   * Attributes for filtering users by both user properties and event platform activity.
   */
  "attributes"?: QueryEventFilteredUsersRequestDataAttributes;
  /**
   * Unique identifier for the query event filtered users request resource.
   */
  "id"?: string;
  /**
   * Query event filtered users request resource type.
   */
  "type": QueryEventFilteredUsersRequestDataType;
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
    attributes: {
      baseName: "attributes",
      type: "QueryEventFilteredUsersRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "QueryEventFilteredUsersRequestDataType",
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
    return QueryEventFilteredUsersRequestData.attributeTypeMap;
  }

  public constructor() {}
}
