import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination information for monthly resource usage.
 */
export class MonthlyResourcesPagination {
  /**
   * Cursor for the next request. Pass as `page[next_record_id]` with the same filters. Null when there are no more results.
   */
  "nextRecordId"?: string;
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
    nextRecordId: {
      baseName: "next_record_id",
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
    return MonthlyResourcesPagination.attributeTypeMap;
  }

  public constructor() {}
}
