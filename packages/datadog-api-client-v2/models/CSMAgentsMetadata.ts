/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata related to the paginated response.
 */
export class CSMAgentsMetadata {
  /**
   * The index of the current page in the paginated results.
   */
  "pageIndex"?: number;
  /**
   * The number of items per page in the paginated results.
   */
  "pageSize"?: number;
  /**
   * Total number of items that match the filter criteria.
   */
  "totalFiltered"?: number;

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
    pageIndex: {
      baseName: "page_index",
      type: "number",
      format: "int64",
    },
    pageSize: {
      baseName: "page_size",
      type: "number",
      format: "int64",
    },
    totalFiltered: {
      baseName: "total_filtered",
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
    return CSMAgentsMetadata.attributeTypeMap;
  }

  public constructor() {}
}
