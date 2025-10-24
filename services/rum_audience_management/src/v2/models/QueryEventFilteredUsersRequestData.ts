import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryEventFilteredUsersRequestDataAttributes } from "./QueryEventFilteredUsersRequestDataAttributes";
import { QueryEventFilteredUsersRequestDataType } from "./QueryEventFilteredUsersRequestDataType";

export class QueryEventFilteredUsersRequestData {
  "attributes"?: QueryEventFilteredUsersRequestDataAttributes;
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
