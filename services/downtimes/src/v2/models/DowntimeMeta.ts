import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeMetaPage } from "./DowntimeMetaPage";

/**
 * Pagination metadata returned by the API.
 */
export class DowntimeMeta {
  /**
   * Object containing the total filtered count.
   */
  "page"?: DowntimeMetaPage;
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
      type: "DowntimeMetaPage",
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
    return DowntimeMeta.attributeTypeMap;
  }

  public constructor() {}
}
