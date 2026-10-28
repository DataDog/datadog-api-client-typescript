import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Paging attributes for listing events.
 */
export class RUMQueryPageOptions {
  /**
   * Cursor to get the next page of results, taken from `meta.page.after` of the previous response. Send it with the same `filter` and `sort` as the request that returned it.
   */
  "cursor"?: string;
  /**
   * Maximum number of events in the response. Between 1 and 1000.
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMQueryPageOptions.attributeTypeMap;
  }

  public constructor() {}
}
