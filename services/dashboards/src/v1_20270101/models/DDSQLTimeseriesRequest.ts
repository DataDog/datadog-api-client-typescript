import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DDSQLTimeseriesRequestRequestType } from "./DDSQLTimeseriesRequestRequestType";
import { DDSQLTimeseriesRequestResponseFormat } from "./DDSQLTimeseriesRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DDSQLTimeseriesRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ddsqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": DDSQLTimeseriesRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": DDSQLTimeseriesRequestResponseFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddsqlQuery: {
      baseName: "ddsql_query",
      type: "string",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "DDSQLTimeseriesRequestRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "DDSQLTimeseriesRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DDSQLTimeseriesRequest.attributeTypeMap;
  }

  public constructor() {}
}
