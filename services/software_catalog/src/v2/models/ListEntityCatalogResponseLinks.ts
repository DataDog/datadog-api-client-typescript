import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * List entity response links.
 */
export class ListEntityCatalogResponseLinks {
  /**
   * Next link.
   */
  "next"?: string;
  /**
   * Previous link.
   */
  "previous"?: string;
  /**
   * Current link.
   */
  "self"?: string;
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
    next: {
      baseName: "next",
      type: "string",
    },
    previous: {
      baseName: "previous",
      type: "string",
    },
    self: {
      baseName: "self",
      type: "string",
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
    return ListEntityCatalogResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
