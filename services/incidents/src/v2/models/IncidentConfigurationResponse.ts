import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentConfigurationDataResponse } from "./IncidentConfigurationDataResponse";
import { IncidentUserData } from "./IncidentUserData";

/**
 * Response with an incident configuration.
 */
export class IncidentConfigurationResponse {
  /**
   * Incident configuration data in a response.
   */
  "data": IncidentConfigurationDataResponse;
  /**
   * Included related resources.
   */
  "included"?: Array<IncidentUserData>;
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
      type: "IncidentConfigurationDataResponse",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentUserData>",
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
    return IncidentConfigurationResponse.attributeTypeMap;
  }

  public constructor() {}
}
