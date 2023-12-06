/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination object.
 */
export class Pagination {
  /**
   * The maximum element count allowed per page.
   */
  "maxPageSize"?: number;
  /**
   * Total count.
   */
  "totalCount"?: number;
  /**
   * Total count of elements matched by the filter.
   */
  "totalFilteredCount"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    maxPageSize: {
      baseName: "max_page_size",
      type: "number",
      format: "int64",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      format: "int64",
    },
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Pagination.attributeTypeMap;
  }

  public constructor() {}
}
