import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListRowsResponseLinks } from "./ListRowsResponseLinks";
import { ListRowsResponseMeta } from "./ListRowsResponseMeta";
import { TableRowResourceData } from "./TableRowResourceData";

/**
 * Paginated list of reference table rows.
 */
export class ListRowsResponse {
  /**
   * The rows.
   */
  "data": Array<TableRowResourceData>;
  /**
   * Pagination links for the list rows response.
   */
  "links": ListRowsResponseLinks;
  /**
   * Contains pagination details, including the continuation token for fetching additional rows.
   */
  "meta"?: ListRowsResponseMeta;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<TableRowResourceData>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "ListRowsResponseLinks",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListRowsResponseMeta",
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
    return ListRowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
