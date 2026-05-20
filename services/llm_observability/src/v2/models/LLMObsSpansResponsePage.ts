import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination cursor for the spans response.
 */
export class LLMObsSpansResponsePage {
  /**
   * Cursor to retrieve the next page of results. Absent when there are no more results.
   */
  "after"?: string;
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
    after: {
      baseName: "after",
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
    return LLMObsSpansResponsePage.attributeTypeMap;
  }

  public constructor() {}
}
