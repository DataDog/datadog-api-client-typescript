/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata related to paging information that is included in the response when querying the team hierarchy links
 */
export class TeamsHierarchyLinksResponseMetaPage {
  /**
   * First page number.
   */
  "firstNumber"?: number;
  /**
   * First offset.
   */
  "firstOffset"?: number;
  /**
   * Last page number.
   */
  "lastNumber"?: number;
  /**
   * Last offset.
   */
  "lastOffset"?: number;
  /**
   * Page limit, when offset pagination is used.
   */
  "limit"?: number;
  /**
   * Next page number.
   */
  "nextNumber"?: number;
  /**
   * Next offset.
   */
  "nextOffset"?: number;
  /**
   * Page number.
   */
  "number"?: number;
  /**
   * Current offset, when offset pagination is used.
   */
  "offset"?: number;
  /**
   * Previous page number.
   */
  "prevNumber"?: number;
  /**
   * Previous offset.
   */
  "prevOffset"?: number;
  /**
   * Page size.
   */
  "size"?: number;
  /**
   * Total number of results.
   */
  "total"?: number;
  /**
   * Pagination type.
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
    firstNumber: {
      baseName: "first_number",
      type: "number",
      format: "int64",
    },
    firstOffset: {
      baseName: "first_offset",
      type: "number",
      format: "int64",
    },
    lastNumber: {
      baseName: "last_number",
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
    nextNumber: {
      baseName: "next_number",
      type: "number",
      format: "int64",
    },
    nextOffset: {
      baseName: "next_offset",
      type: "number",
      format: "int64",
    },
    number: {
      baseName: "number",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    prevNumber: {
      baseName: "prev_number",
      type: "number",
      format: "int64",
    },
    prevOffset: {
      baseName: "prev_offset",
      type: "number",
      format: "int64",
    },
    size: {
      baseName: "size",
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
    return TeamsHierarchyLinksResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
