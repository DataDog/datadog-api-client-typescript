import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The metadata for the current pagination.
 */
export class HourlyUsageAttributionPagination {
  /**
   * The cursor to get the next results (if any). To make the next request, use the same parameters and add `next_record_id`.
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HourlyUsageAttributionPagination.attributeTypeMap;
  }

  public constructor() {}
}
