/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Pagination metadata for feature flag change history responses.
 */
export class FeatureFlagHistoryPaginationMetaPage {
  /**
   * Offset of the first page.
   */
  "firstOffset"?: Int64;
  /**
   * Offset of the last page.
   */
  "lastOffset"?: Int64;
  /**
   * Maximum number of events returned on this page.
   */
  "limit"?: Int64;
  /**
   * Offset of the next page, or null when there is no next page.
   */
  "nextOffset"?: Int64;
  /**
   * Number of matching events skipped before this page.
   */
  "offset"?: Int64;
  /**
   * Offset of the previous page, or null when there is no previous page.
   */
  "prevOffset"?: Int64;
  /**
   * Total number of events matching the filters, independent of the page size.
   * It counts experiment proposals that you cannot read, which are left out of the pages, so a page can hold fewer events than `limit`.
   */
  "total"?: Int64;
  /**
   * The pagination method. Always `offset_limit`.
   */
  "type"?: string;

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
    firstOffset: {
      baseName: "first_offset",
      type: "number",
      format: "int64",
    },
    lastOffset: {
      baseName: "last_offset",
      type: "number",
      format: "int64",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    nextOffset: {
      baseName: "next_offset",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    prevOffset: {
      baseName: "prev_offset",
      type: "number",
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return FeatureFlagHistoryPaginationMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
