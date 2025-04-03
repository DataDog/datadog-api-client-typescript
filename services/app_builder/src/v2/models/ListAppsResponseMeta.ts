import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListAppsResponseMetaPage } from "./ListAppsResponseMetaPage";

/**
 * Pagination metadata.
 */
export class ListAppsResponseMeta {
  /**
   * Information on the total number of apps, to be used for pagination.
   */
  "page"?: ListAppsResponseMetaPage;
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
      type: "ListAppsResponseMetaPage",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListAppsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
