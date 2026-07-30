import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentConfigurationPatchDataRequest } from "./IncidentConfigurationPatchDataRequest";

/**
 * Request payload for patching an incident configuration.
 */
export class IncidentConfigurationPatchRequest {
  /**
   * Incident configuration data in a patch request.
   */
  "data": IncidentConfigurationPatchDataRequest;
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
      type: "IncidentConfigurationPatchDataRequest",
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
    return IncidentConfigurationPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
