import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabPageMetaPage } from "./ModelLabPageMetaPage";

/**
 * Pagination metadata for a list response.
 */
export class ModelLabPageMeta {
  /**
   * Pagination details for a list response.
   */
  "page": ModelLabPageMetaPage;
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
      type: "ModelLabPageMetaPage",
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
    return ModelLabPageMeta.attributeTypeMap;
  }

  public constructor() {}
}
