import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination information for a list of deployment gates.
 */
export class DeploymentGatesListResponseMetaPage {
  /**
   * The cursor used for the current page.
   */
  "cursor"?: string;
  /**
   * The cursor to use to fetch the next page. This is absent when there are no more pages.
   */
  "nextCursor"?: string;
  /**
   * The number of results per page.
   */
  "size"?: number;
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
    nextCursor: {
      baseName: "next_cursor",
      type: "string",
    },
    size: {
      baseName: "size",
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
    return DeploymentGatesListResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
