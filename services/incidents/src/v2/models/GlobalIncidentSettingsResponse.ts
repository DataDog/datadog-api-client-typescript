import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalIncidentSettingsDataResponse } from "./GlobalIncidentSettingsDataResponse";

/**
 * Response payload containing global incident settings.
 */
export class GlobalIncidentSettingsResponse {
  /**
   * Data object in the global incident settings response.
   */
  "data": GlobalIncidentSettingsDataResponse;
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
      type: "GlobalIncidentSettingsDataResponse",
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
    return GlobalIncidentSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
