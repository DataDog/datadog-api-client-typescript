import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination attributes for the search request.
 */
export class SecurityFindingsSearchRequestPage {
  /**
   * Get the next page of results with a cursor provided in the previous query.
   */
  "cursor"?: string;
  /**
   * The maximum number of security findings in the response.
   */
  "limit"?: number;
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
    cursor: {
      baseName: "cursor",
      type: "string",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
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
    return SecurityFindingsSearchRequestPage.attributeTypeMap;
  }

  public constructor() {}
}
