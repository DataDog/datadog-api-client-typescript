import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImpactCreateData } from "./IncidentImpactCreateData";

/**
 * Create request for an incident impact.
 */
export class IncidentImpactCreateRequest {
  /**
   * Incident impact data for a create request.
   */
  "data": IncidentImpactCreateData;
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
      type: "IncidentImpactCreateData",
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
    return IncidentImpactCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
