import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PageAnnotationsAttributes } from "./PageAnnotationsAttributes";
import { PageAnnotationsType } from "./PageAnnotationsType";

/**
 * Annotations grouped by widget for a single page.
 */
export class PageAnnotationsData {
  /**
   * Attributes of the annotations on a page.
   */
  "attributes": PageAnnotationsAttributes;
  /**
   * ID of the page, prefixed with the page type and joined by a colon
   * (for example, `dashboard:abc-def-xyz` or `notebook:1234567890`).
   */
  "id": string;
  /**
   * Page annotations resource type.
   */
  "type": PageAnnotationsType;
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
    attributes: {
      baseName: "attributes",
      type: "PageAnnotationsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PageAnnotationsType",
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
    return PageAnnotationsData.attributeTypeMap;
  }

  public constructor() {}
}
