import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata.
 */
export class IncidentNotificationRuleArrayMetaPage {
  /**
   * The offset for the next page of results.
   */
  "nextOffset"?: number;
  /**
   * The current offset in the results.
   */
  "offset"?: number;
  /**
   * The number of results returned per page.
   */
  "size"?: number;
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
    nextOffset: {
      baseName: "next_offset",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    size: {
      baseName: "size",
      type: "number",
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
    return IncidentNotificationRuleArrayMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
