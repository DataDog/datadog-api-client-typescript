import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCommunicationDataResponse } from "./IncidentCommunicationDataResponse";

/**
 * Response with a single communication.
 */
export class IncidentCommunicationResponse {
  /**
   * Incident communication data in a response.
   */
  "data": IncidentCommunicationDataResponse;
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
      type: "IncidentCommunicationDataResponse",
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
    return IncidentCommunicationResponse.attributeTypeMap;
  }

  public constructor() {}
}
