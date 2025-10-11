import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreatePageFromIncidentData } from "./IncidentCreatePageFromIncidentData";

/**
 * Request to create a page from an incident.
 */
export class IncidentCreatePageFromIncidentRequest {
  /**
   * Data for creating a page from an incident.
   */
  "data": IncidentCreatePageFromIncidentData;
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
      type: "IncidentCreatePageFromIncidentData",
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
