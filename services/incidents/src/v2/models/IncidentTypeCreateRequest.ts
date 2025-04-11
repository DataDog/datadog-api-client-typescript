import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentTypeCreateData } from "./IncidentTypeCreateData";

/**
 * Create request for an incident type.
 */
export class IncidentTypeCreateRequest {
  /**
   * Incident type data for a create request.
   */
  "data": IncidentTypeCreateData;
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
      type: "IncidentTypeCreateData",
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
    return IncidentTypeCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
