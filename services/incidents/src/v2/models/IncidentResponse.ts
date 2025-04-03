import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentResponseIncludedItem } from "./IncidentResponseIncludedItem";

/**
 * Response with an incident.
 */
export class IncidentResponse {
  /**
   * Incident data from a response.
   */
  "data": IncidentResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentResponseIncludedItem>;
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
      type: "IncidentResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentResponseIncludedItem>",
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
    return IncidentResponse.attributeTypeMap;
  }

  public constructor() {}
}
