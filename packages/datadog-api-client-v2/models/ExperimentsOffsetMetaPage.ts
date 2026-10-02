/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Result counts and offsets for a page of results.
 */
export class ExperimentsOffsetMetaPage {
  /**
   * Offset of the first page of results.
   */
  "firstOffset"?: number;
  /**
   * Offset of the last page of results.
   */
  "lastOffset"?: number;
  /**
   * Maximum number of results returned in one page.
   */
  "limit"?: number;
  /**
   * Offset of the next page of results.
   */
  "nextOffset"?: number;
  /**
   * Number of results skipped before this page.
   */
  "offset"?: number;
  /**
   * Offset of the previous page of results.
   */
  "prevOffset"?: number;
  /**
   * Total number of matching results across all pages.
   */
  "total"?: number;
  /**
   * Pagination method used for this result set.
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
    return ExperimentsOffsetMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
