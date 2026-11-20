/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Pagination of the search.
 */
export class RemediationGroupsPageMeta {
  /**
   * Page number, starting at 1.
   */
  "number": Int64;
  /**
   * Page size.
   */
  "size": Int64;
  /**
   * Number of groups that match the search across all pages.
   */
  "totalFilteredCount": Int64;

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
    number: {
      baseName: "number",
      type: "number",
      required: true,
      format: "int64",
    },
    size: {
      baseName: "size",
      type: "number",
      required: true,
      format: "int64",
    },
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      required: true,
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
    return RemediationGroupsPageMeta.attributeTypeMap;
  }

  public constructor() {}
}
