import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerMetaPageType } from "./ContainerMetaPageType";

/**
 * Paging attributes.
 */
export class ContainerMetaPage {
  /**
   * The cursor used to get the current results, if any.
   */
  "cursor"?: string;
  /**
   * Number of results returned
   */
  "limit"?: number;
  /**
   * The cursor used to get the next results, if any.
   */
  "nextCursor"?: string;
  /**
   * The cursor used to get the previous results, if any.
   */
  "prevCursor"?: string;
  /**
   * Total number of records that match the query.
   */
  "total"?: number;
  /**
   * Type of Container pagination.
   */
  "type"?: ContainerMetaPageType;
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
    limit: {
      baseName: "limit",
      type: "number",
      format: "int32",
    },
    nextCursor: {
      baseName: "next_cursor",
      type: "string",
    },
    prevCursor: {
      baseName: "prev_cursor",
      type: "string",
    },
    total: {
      baseName: "total",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ContainerMetaPageType",
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
    return ContainerMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
