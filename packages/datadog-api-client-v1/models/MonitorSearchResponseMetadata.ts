/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about the response.
 */
export class MonitorSearchResponseMetadata {
  /**
   * The page to start paginating from.
   */
  "page"?: number;
  /**
   * The number of pages.
   */
  "pageCount"?: number;
  /**
   * The number of monitors to return per page.
   */
  "perPage"?: number;
  /**
   * The total number of monitors.
   */
  "totalCount"?: number;

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
    page: {
      baseName: "page",
      type: "number",
      format: "int64",
    },
    pageCount: {
      baseName: "page_count",
      type: "number",
      format: "int64",
    },
    perPage: {
      baseName: "per_page",
      type: "number",
      format: "int64",
    },
    totalCount: {
      baseName: "total_count",
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
    return MonitorSearchResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
