import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContainerImageMetaPageType } from "./ContainerImageMetaPageType";

/**
 * Paging attributes.
 */
export class ContainerImageMetaPage {
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
   * Type of Container Image pagination.
   */
  "type"?: ContainerImageMetaPageType;
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
      type: "ContainerImageMetaPageType",
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
    return ContainerImageMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
