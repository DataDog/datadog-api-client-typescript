import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudInventorySyncConfigResponseData } from "./CloudInventorySyncConfigResponseData";

/**
 * Response containing the upserted sync configuration. Additional read-only fields appear on list and get.
 */
export class CloudInventorySyncConfigResponse {
  /**
   * JSON:API data object for a sync configuration.
   */
  "data": CloudInventorySyncConfigResponseData;
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
      type: "CloudInventorySyncConfigResponseData",
      required: true,
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
    return CloudInventorySyncConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
