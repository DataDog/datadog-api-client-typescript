import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination information for the list devices response.
 */
export class DeviceBaseArrayMetaPage {
  /**
   * Cursor to pass as `page[cursor]` to get the next page.
   * Present only when more devices remain.
   */
  "after"?: string;
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
    after: {
      baseName: "after",
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
    return DeviceBaseArrayMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
