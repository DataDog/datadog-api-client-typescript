import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreatePageFromIncidentDataRequest } from "./IncidentCreatePageFromIncidentDataRequest";

/**
 * Request payload for creating a page from an incident.
 */
export class IncidentCreatePageFromIncidentRequest {
  /**
   * Page data in a create request.
   */
  "data": IncidentCreatePageFromIncidentDataRequest;
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
      type: "IncidentCreatePageFromIncidentDataRequest",
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
    return IncidentCreatePageFromIncidentRequest.attributeTypeMap;
  }

  public constructor() {}
}
