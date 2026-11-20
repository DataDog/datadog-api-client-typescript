import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetListRequest20270101Query } from "./DatasetListRequest20270101Query";
import { DatasetListRequestColumnsItems } from "./DatasetListRequestColumnsItems";
import { DatasetListRequestRequestType } from "./DatasetListRequestRequestType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DatasetListRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DatasetListRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DatasetListRequest20270101Query;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": DatasetListRequestRequestType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<DatasetListRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DatasetListRequest20270101Query",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "DatasetListRequestRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatasetListRequest.attributeTypeMap;
  }

  public constructor() {}
}
