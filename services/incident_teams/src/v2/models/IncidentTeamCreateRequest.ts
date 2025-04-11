import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTeamCreateData } from "./IncidentTeamCreateData";

/**
 * Create request with an incident team payload.
 */
export class IncidentTeamCreateRequest {
  /**
   * Incident Team data for a create request.
   */
  "data": IncidentTeamCreateData;
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
      type: "IncidentTeamCreateData",
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
    return IncidentTeamCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
