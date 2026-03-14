import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Sorting configuration specifying the field and direction for ordering user query results.
 */
export class QueryUsersRequestDataAttributesSort {
  /**
   * The user attribute field name to sort results by.
   */
  "field"?: string;
  /**
   * The sort direction, either ascending or descending.
   */
  "order"?: string;
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
    field: {
      baseName: "field",
      type: "string",
    },
    order: {
      baseName: "order",
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
    return QueryUsersRequestDataAttributesSort.attributeTypeMap;
  }

  public constructor() {}
}
