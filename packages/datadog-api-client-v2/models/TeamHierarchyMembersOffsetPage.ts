/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyMembersOffsetPageType } from "./TeamHierarchyMembersOffsetPageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination metadata using offset and limit.
 */
export class TeamHierarchyMembersOffsetPage {
  /**
   * First offset.
   */
  "firstOffset": number;
  /**
   * Last offset. Null when unavailable.
   */
  "lastOffset": number | null;
  /**
   * Maximum number of members per page.
   */
  "limit": number;
  /**
   * Next offset. Null when unavailable.
   */
  "nextOffset": number | null;
  /**
   * Current offset.
   */
  "offset": number;
  /**
   * Previous offset. Null when unavailable.
   */
  "prevOffset": number | null;
  /**
   * Total number of members matching the filters.
   */
  "total": number;
  /**
   * Pagination mode.
   */
  "type": TeamHierarchyMembersOffsetPageType;

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
      required: true,
      format: "int64",
    },
    lastOffset: {
      baseName: "last_offset",
      type: "number",
      required: true,
      format: "int64",
    },
    limit: {
      baseName: "limit",
      type: "number",
      required: true,
      format: "int64",
    },
    nextOffset: {
      baseName: "next_offset",
      type: "number",
      required: true,
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      required: true,
      format: "int64",
    },
    prevOffset: {
      baseName: "prev_offset",
      type: "number",
      required: true,
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "TeamHierarchyMembersOffsetPageType",
      required: true,
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
    return TeamHierarchyMembersOffsetPage.attributeTypeMap;
  }

  public constructor() {}
}
