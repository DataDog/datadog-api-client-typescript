import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DDSQLTableRequestRequestType } from "./DDSQLTableRequestRequestType";
import { DDSQLTableRequestResponseFormat } from "./DDSQLTableRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DDSQLTableRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ddsqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": DDSQLTableRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": DDSQLTableRequestResponseFormat;
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
      type: "DDSQLTableRequestRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "DDSQLTableRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DDSQLTableRequest.attributeTypeMap;
  }

  public constructor() {}
}
