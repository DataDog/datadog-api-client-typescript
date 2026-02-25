import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A user-based audience query.
 */
export class ProductAnalyticsAudienceUserSubquery {
  /**
   * Name of this query, referenced in the formula.
   */
  "name": string;
  /**
   * Search query for filtering users.
   */
  "query"?: string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
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
    return ProductAnalyticsAudienceUserSubquery.attributeTypeMap;
  }

  public constructor() {}
}
