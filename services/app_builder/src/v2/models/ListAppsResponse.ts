import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Deployment } from "./Deployment";
import { ListAppsResponseDataItems } from "./ListAppsResponseDataItems";
import { ListAppsResponseMeta } from "./ListAppsResponseMeta";

/**
 * A paginated list of apps matching the specified filters and sorting.
 */
export class ListAppsResponse {
  /**
   * An array of app definitions.
   */
  "data"?: Array<ListAppsResponseDataItems>;
  /**
   * Data on the version of the app that was published.
   */
  "included"?: Array<Deployment>;
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
      type: "Array<ListAppsResponseDataItems>",
    },
    included: {
      baseName: "included",
      type: "Array<Deployment>",
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
    return ListAppsResponse.attributeTypeMap;
  }

  public constructor() {}
}
