import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppFavoriteRequestData } from "./UpdateAppFavoriteRequestData";

/**
 * A request to add or remove an app from the current user's favorites.
 */
export class UpdateAppFavoriteRequest {
  /**
   * Data for updating an app's favorite status.
   */
  "data"?: UpdateAppFavoriteRequestData;
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
      type: "UpdateAppFavoriteRequestData",
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
    return UpdateAppFavoriteRequest.attributeTypeMap;
  }

  public constructor() {}
}
