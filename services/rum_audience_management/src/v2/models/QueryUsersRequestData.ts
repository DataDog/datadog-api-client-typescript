import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryUsersRequestDataAttributes } from "./QueryUsersRequestDataAttributes";
import { QueryUsersRequestDataType } from "./QueryUsersRequestDataType";

export class QueryUsersRequestData {
  "attributes"?: QueryUsersRequestDataAttributes;
  "id"?: string;
  /**
   * Query users request resource type.
   */
  "type": QueryUsersRequestDataType;
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
      type: "QueryUsersRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "QueryUsersRequestDataType",
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
    return QueryUsersRequestData.attributeTypeMap;
  }

  public constructor() {}
}
