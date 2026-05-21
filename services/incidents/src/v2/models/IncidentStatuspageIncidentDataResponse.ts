import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatuspageIncidentDataAttributesResponse } from "./IncidentStatuspageIncidentDataAttributesResponse";
import { IncidentStatuspageIncidentType } from "./IncidentStatuspageIncidentType";

/**
 * Statuspage incident data in a response.
 */
export class IncidentStatuspageIncidentDataResponse {
  /**
   * Attributes of a Statuspage incident integration.
   */
  "attributes": IncidentStatuspageIncidentDataAttributesResponse;
  /**
   * The integration identifier.
   */
  "id": string;
  /**
   * Statuspage incident integration resource type.
   */
  "type": IncidentStatuspageIncidentType;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentStatuspageIncidentDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentStatuspageIncidentType",
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
    return IncidentStatuspageIncidentDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
