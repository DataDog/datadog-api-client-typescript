import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentOrgSettingsDataResponse } from "./IncidentOrgSettingsDataResponse";

/**
 * Response with a single incident org settings resource.
 */
export class IncidentOrgSettingsResponse {
  /**
   * Incident org settings data in a response.
   */
  "data": IncidentOrgSettingsDataResponse;
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
      type: "IncidentOrgSettingsDataResponse",
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
    return IncidentOrgSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
