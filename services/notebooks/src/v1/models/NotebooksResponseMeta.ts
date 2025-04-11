import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebooksResponsePage } from "./NotebooksResponsePage";

/**
 * Searches metadata returned by the API.
 */
export class NotebooksResponseMeta {
  /**
   * Pagination metadata returned by the API.
   */
  "page"?: NotebooksResponsePage;
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
      type: "NotebooksResponsePage",
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
    return NotebooksResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
