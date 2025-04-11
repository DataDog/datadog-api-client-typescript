import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKeyResponseIncludedItem } from "./ApplicationKeyResponseIncludedItem";
import { ApplicationKeyResponseMeta } from "./ApplicationKeyResponseMeta";
import { PartialApplicationKey } from "./PartialApplicationKey";

/**
 * Response for a list of application keys.
 */
export class ListApplicationKeysResponse {
  /**
   * Array of application keys.
   */
  "data"?: Array<PartialApplicationKey>;
  /**
   * Array of objects related to the application key.
   */
  "included"?: Array<ApplicationKeyResponseIncludedItem>;
  /**
   * Additional information related to the application key response.
   */
  "meta"?: ApplicationKeyResponseMeta;
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
      type: "Array<PartialApplicationKey>",
    },
    included: {
      baseName: "included",
      type: "Array<ApplicationKeyResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "ApplicationKeyResponseMeta",
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
    return ListApplicationKeysResponse.attributeTypeMap;
  }

  public constructor() {}
}
