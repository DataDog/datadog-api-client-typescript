import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Contains the continuation token for navigating to the next page of rows.
 */
export class ListRowsResponseMetaPage {
  /**
   * Opaque token to pass as the `page[continuation_token]` query parameter to fetch the next page of results. Only present when more rows are available.
   */
  "nextContinuationToken"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    nextContinuationToken: {
      baseName: "next_continuation_token",
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
    return ListRowsResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
