/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamHierarchyMembersNumberPageType } from "./TeamHierarchyMembersNumberPageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination metadata using number and size.
 */
export class TeamHierarchyMembersNumberPage {
  /**
   * First page number.
   */
  "firstNumber": number;
  /**
   * Last page number. Null when unavailable.
   */
  "lastNumber": number | null;
  /**
   * Next page number. Null when unavailable.
   */
  "nextNumber": number | null;
  /**
   * Current zero-based page number.
   */
  "number": number;
  /**
   * Previous page number. Null when unavailable.
   */
  "prevNumber": number | null;
  /**
   * Maximum number of members per page.
   */
  "size": number;
  /**
   * Total number of members matching the filters.
   */
  "total": number;
  /**
   * Pagination mode.
   */
  "type": TeamHierarchyMembersNumberPageType;

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
      required: true,
      format: "int64",
    },
    lastNumber: {
      baseName: "last_number",
      type: "number",
      required: true,
      format: "int64",
    },
    nextNumber: {
      baseName: "next_number",
      type: "number",
      required: true,
      format: "int64",
    },
    number: {
      baseName: "number",
      type: "number",
      required: true,
      format: "int64",
    },
    prevNumber: {
      baseName: "prev_number",
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
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "TeamHierarchyMembersNumberPageType",
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
    return TeamHierarchyMembersNumberPage.attributeTypeMap;
  }

  public constructor() {}
}
