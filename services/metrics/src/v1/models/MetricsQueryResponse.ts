import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricsQueryMetadata } from "./MetricsQueryMetadata";

/**
 * Response Object that includes your query and the list of metrics retrieved.
 */
export class MetricsQueryResponse {
  /**
   * Message indicating the errors if status is not `ok`.
   */
  "error"?: string;
  /**
   * Start of requested time window, milliseconds since Unix epoch.
   */
  "fromDate"?: number;
  /**
   * List of tag keys on which to group.
   */
  "groupBy"?: Array<string>;
  /**
   * Message indicating `success` if status is `ok`.
   */
  "message"?: string;
  /**
   * Query string
   */
  "query"?: string;
  /**
   * Type of response.
   */
  "resType"?: string;
  /**
   * List of timeseries queried.
   */
  "series"?: Array<MetricsQueryMetadata>;
  /**
   * Status of the query.
   */
  "status"?: string;
  /**
   * End of requested time window, milliseconds since Unix epoch.
   */
  "toDate"?: number;
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
    error: {
      baseName: "error",
      type: "string",
    },
    fromDate: {
      baseName: "from_date",
      type: "number",
      format: "int64",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    resType: {
      baseName: "res_type",
      type: "string",
    },
    series: {
      baseName: "series",
      type: "Array<MetricsQueryMetadata>",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    toDate: {
      baseName: "to_date",
      type: "number",
      format: "int64",
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
    return MetricsQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
