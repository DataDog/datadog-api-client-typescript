import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PageAnnotationsData } from "./PageAnnotationsData";

/**
 * Response containing all annotations on a page, grouped by widget.
 */
export class PageAnnotationsResponse {
  /**
   * Annotations grouped by widget for a single page.
   */
  "data": PageAnnotationsData;
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
    data: {
      baseName: "data",
      type: "PageAnnotationsData",
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
    return PageAnnotationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
