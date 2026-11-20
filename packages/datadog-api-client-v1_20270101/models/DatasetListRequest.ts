/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatasetListRequest20270101Query } from "./DatasetListRequest20270101Query";
import { DatasetListRequestColumnsItems } from "./DatasetListRequestColumnsItems";
import { DatasetListRequestRequestType } from "./DatasetListRequestRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
