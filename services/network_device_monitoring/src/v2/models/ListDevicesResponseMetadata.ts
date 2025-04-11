import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListDevicesResponseMetadataPage } from "./ListDevicesResponseMetadataPage";

/**
 * Object describing meta attributes of response.
 */
export class ListDevicesResponseMetadata {
  /**
   * Pagination object.
   */
  "page"?: ListDevicesResponseMetadataPage;
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
      type: "ListDevicesResponseMetadataPage",
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
    return ListDevicesResponseMetadata.attributeTypeMap;
  }

  public constructor() {}
}
