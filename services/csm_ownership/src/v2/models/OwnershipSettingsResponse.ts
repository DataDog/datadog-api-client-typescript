import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipSettingsData } from "./OwnershipSettingsData";

/**
 * The response returned when retrieving or updating ownership settings.
 */
export class OwnershipSettingsResponse {
  /**
   * The data wrapper for an ownership settings response.
   */
  "data": OwnershipSettingsData;
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
      type: "OwnershipSettingsData",
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
    return OwnershipSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
