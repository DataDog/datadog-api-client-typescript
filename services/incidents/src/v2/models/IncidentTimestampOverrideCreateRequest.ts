import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTimestampOverrideCreateData } from "./IncidentTimestampOverrideCreateData";

/**
 * Request to create an incident timestamp override.
 */
export class IncidentTimestampOverrideCreateRequest {
  /**
   * Data for creating an incident timestamp override.
   */
  "data": IncidentTimestampOverrideCreateData;
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
      type: "IncidentTimestampOverrideCreateData",
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
    return IncidentTimestampOverrideCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
