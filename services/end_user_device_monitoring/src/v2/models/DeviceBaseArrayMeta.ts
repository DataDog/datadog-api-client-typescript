import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeviceBaseArrayMetaPage } from "./DeviceBaseArrayMetaPage";

/**
 * Metadata about the list devices response.
 */
export class DeviceBaseArrayMeta {
  /**
   * Pagination information for the list devices response.
   */
  "page"?: DeviceBaseArrayMetaPage;
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
      type: "DeviceBaseArrayMetaPage",
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
    return DeviceBaseArrayMeta.attributeTypeMap;
  }

  public constructor() {}
}
