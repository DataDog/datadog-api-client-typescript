/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Archived-session query. A window wider than configured archive retention is narrowed before searching.
 */
export class RumArchiveSessionsSearchAttributes {
  /**
   * Opaque next-page cursor. Keep the query, time range, and hide_retained value unchanged.
   */
  "cursor"?: string;
  /**
   * Start of the range in Unix milliseconds. Must be positive and earlier than to.
   */
  "from": Int64;
  /**
   * When true, exclude sessions already present in hot RUM storage. When false, those sessions can appear in the results. Keep this value unchanged when continuing with a cursor.
   */
  "hideRetained"?: boolean;
  /**
   * Page size, at most 1000 (default 50). Values at or below zero use 50.
   */
  "limit"?: number;
  /**
   * RUM search query. Must not be empty.
   */
  "query": string;
  /**
   * End of the range in Unix milliseconds.
   */
  "to": Int64;

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
    cursor: {
      baseName: "cursor",
      type: "string",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    hideRetained: {
      baseName: "hide_retained",
      type: "boolean",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    to: {
      baseName: "to",
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
    return RumArchiveSessionsSearchAttributes.attributeTypeMap;
  }

  public constructor() {}
}
