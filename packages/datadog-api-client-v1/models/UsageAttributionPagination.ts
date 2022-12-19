/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metadata for the current pagination.
 */
export class UsageAttributionPagination {
  /**
   * Maximum amount of records to be returned.
   */
  "limit"?: number;
  /**
   * Records to be skipped before beginning to return.
   */
  "offset"?: number;
  /**
   * Direction to sort by.
   */
  "sortDirection"?: string;
  /**
   * Field to sort by.
   */
  "sortName"?: string;
  /**
   * Total number of records.
   */
  "totalNumberOfRecords"?: number;

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
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    sortDirection: {
      baseName: "sort_direction",
      type: "string",
    },
    sortName: {
      baseName: "sort_name",
      type: "string",
    },
    totalNumberOfRecords: {
      baseName: "total_number_of_records",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageAttributionPagination.attributeTypeMap;
  }

  public constructor() {}
}
