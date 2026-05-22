import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata for the entity context response.
 */
export class EntityContextPage {
  /**
   * An opaque token to pass as `page_token` in a subsequent request to retrieve the next page of results. Empty when there are no more results.
   */
  "nextToken": string;
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
    nextToken: {
      baseName: "next_token",
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
    return EntityContextPage.attributeTypeMap;
  }

  public constructor() {}
}
