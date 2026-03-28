import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata for the user-defined field list response.
 */
export class IncidentUserDefinedFieldListMeta {
  /**
   * The offset of the current page.
   */
  "pageOffset": number;
  /**
   * The total number of items in the current page.
   */
  "total": number;
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
    pageOffset: {
      baseName: "page_offset",
      type: "number",
      required: true,
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
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
    return IncidentUserDefinedFieldListMeta.attributeTypeMap;
  }

  public constructor() {}
}
