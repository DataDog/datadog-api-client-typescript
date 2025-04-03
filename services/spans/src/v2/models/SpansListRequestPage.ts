import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Paging attributes for listing spans.
 */
export class SpansListRequestPage {
  /**
   * List following results with a cursor provided in the previous query.
   */
  "cursor"?: string;
  /**
   * Maximum number of spans in the response.
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
      format: "int32",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansListRequestPage.attributeTypeMap;
  }

  public constructor() {}
}
