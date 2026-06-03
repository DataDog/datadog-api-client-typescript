import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SourcemapsListMetaPage } from "./SourcemapsListMetaPage";

/**
 * Pagination metadata for the source maps list response.
 */
export class SourcemapsListMeta {
  /**
   * Page information for the source maps list response.
   */
  "page": SourcemapsListMetaPage;
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
      type: "SourcemapsListMetaPage",
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
    return SourcemapsListMeta.attributeTypeMap;
  }

  public constructor() {}
}
