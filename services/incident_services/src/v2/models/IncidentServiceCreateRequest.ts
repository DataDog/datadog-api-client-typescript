import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentServiceCreateData } from "./IncidentServiceCreateData";

/**
 * Create request with an incident service payload.
 */
export class IncidentServiceCreateRequest {
  /**
   * Incident Service payload for create requests.
   */
  "data": IncidentServiceCreateData;
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
      type: "IncidentServiceCreateData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentServiceCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
