/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing information about the pages of the list of SLOs.
 */
export class SLOListResponseMetadataPage {
  /**
   * The total number of resources that could be retrieved ignoring the parameters and filters in the request.
   */
  "totalCount"?: number;
  /**
   * The total number of resources that match the parameters and filters in the request. This attribute can be used by a client to determine the total number of pages.
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
    return SLOListResponseMetadataPage.attributeTypeMap;
  }

  public constructor() {}
}
