import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The metadata for the current pagination.
 */
export class UsageTopAvgMetricsPagination {
  /**
   * Maximum amount of records to be returned.
   */
  "limit"?: number;
  /**
   * The cursor to get the next results (if any). To make the next request, use the same parameters and add `next_record_id`.
   */
  "nextRecordId"?: string;
  /**
   * Total number of records.
   */
  "totalNumberOfRecords"?: number;
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
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    nextRecordId: {
      baseName: "next_record_id",
      type: "string",
    },
    totalNumberOfRecords: {
      baseName: "total_number_of_records",
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
    return UsageTopAvgMetricsPagination.attributeTypeMap;
  }

  public constructor() {}
}
