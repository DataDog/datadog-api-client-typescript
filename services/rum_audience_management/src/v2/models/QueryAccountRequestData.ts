import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryAccountRequestDataAttributes } from "./QueryAccountRequestDataAttributes";
import { QueryAccountRequestDataType } from "./QueryAccountRequestDataType";

/**
 * The data object containing the resource type and attributes for querying accounts.
 */
export class QueryAccountRequestData {
  /**
   * Attributes for filtering and shaping the account query results.
   */
  "attributes"?: QueryAccountRequestDataAttributes;
  /**
   * Unique identifier for the query account request resource.
   */
  "id"?: string;
  /**
   * Query account request resource type.
   */
  "type": QueryAccountRequestDataType;
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
      type: "QueryAccountRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "QueryAccountRequestDataType",
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
    return QueryAccountRequestData.attributeTypeMap;
  }

  public constructor() {}
}
