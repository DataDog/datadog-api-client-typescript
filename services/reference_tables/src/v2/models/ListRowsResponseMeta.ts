import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListRowsResponseMetaPage } from "./ListRowsResponseMetaPage";

/**
 * Contains pagination details, including the continuation token for fetching additional rows.
 */
export class ListRowsResponseMeta {
  /**
   * Contains the continuation token for navigating to the next page of rows.
   */
  "page"?: ListRowsResponseMetaPage;
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
    page: {
      baseName: "page",
      type: "ListRowsResponseMetaPage",
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
    return ListRowsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
