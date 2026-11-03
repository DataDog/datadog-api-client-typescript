/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReportScheduleListResponsePaginationType } from "./ReportScheduleListResponsePaginationType";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Offset and limit pagination metadata for a report schedule list response.
 */
export class ReportScheduleListResponsePagination {
  /**
   * The first offset.
   */
  "firstOffset"?: Int64;
  /**
   * The last offset when the total count is known, or `null` if it is unavailable.
   */
  "lastOffset"?: Int64;
  /**
   * The maximum number of schedules returned.
   */
  "limit"?: Int64;
  /**
   * The next offset.
   */
  "nextOffset"?: Int64;
  /**
   * The current offset.
   */
  "offset"?: Int64;
  /**
   * The previous offset.
   */
  "prevOffset"?: Int64;
  /**
   * The total number of matching schedules.
   */
  "total"?: Int64;
  /**
   * The pagination type.
   */
  "type"?: ReportScheduleListResponsePaginationType;

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
      type: "ReportScheduleListResponsePaginationType",
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
    return ReportScheduleListResponsePagination.attributeTypeMap;
  }

  public constructor() {}
}
