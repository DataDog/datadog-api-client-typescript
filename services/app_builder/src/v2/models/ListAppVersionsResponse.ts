import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppVersion } from "./AppVersion";
import { ListAppsResponseMeta } from "./ListAppsResponseMeta";

/**
 * A paginated list of versions for an app.
 */
export class ListAppVersionsResponse {
  /**
   * The list of app versions.
   */
  "data"?: Array<AppVersion>;
  /**
   * Pagination metadata.
   */
  "meta"?: ListAppsResponseMeta;
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
      type: "Array<AppVersion>",
    },
    meta: {
      baseName: "meta",
      type: "ListAppsResponseMeta",
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
    return ListAppVersionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
