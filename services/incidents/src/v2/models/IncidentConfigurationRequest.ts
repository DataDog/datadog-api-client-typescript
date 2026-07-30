import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentConfigurationDataRequest } from "./IncidentConfigurationDataRequest";

/**
 * Request payload for creating an incident configuration.
 */
export class IncidentConfigurationRequest {
  /**
   * Incident configuration data in a create request.
   */
  "data": IncidentConfigurationDataRequest;
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
      type: "IncidentConfigurationDataRequest",
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
    return IncidentConfigurationRequest.attributeTypeMap;
  }

  public constructor() {}
}
