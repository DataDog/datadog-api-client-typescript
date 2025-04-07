import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsStorageTier } from "./LogsStorageTier";

/**
 * The search and filter query settings
 */
export class LogsQueryFilter {
  /**
   * The minimum time for the requested logs, supports date math and regular timestamps (milliseconds).
   */
  "from"?: string;
  /**
   * For customers with multiple indexes, the indexes to search. Defaults to ['*'] which means all indexes.
   */
  "indexes"?: Array<string>;
  /**
   * The search query - following the log search syntax.
   */
  "query"?: string;
  /**
   * Specifies storage type as indexes, online-archives or flex
   */
  "storageTier"?: LogsStorageTier;
  /**
   * The maximum time for the requested logs, supports date math and regular timestamps (milliseconds).
   */
  "to"?: string;
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
    from: {
      baseName: "from",
      type: "string",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    storageTier: {
      baseName: "storage_tier",
      type: "LogsStorageTier",
    },
    to: {
      baseName: "to",
      type: "string",
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
    return LogsQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
