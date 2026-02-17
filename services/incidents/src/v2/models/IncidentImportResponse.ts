import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImportResponseData } from "./IncidentImportResponseData";
import { IncidentImportResponseIncludedItem } from "./IncidentImportResponseIncludedItem";

/**
 * Response with an incident.
 */
export class IncidentImportResponse {
  /**
   * Incident data from an import response.
   */
  "data": IncidentImportResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentImportResponseIncludedItem>;
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
      type: "IncidentImportResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentImportResponseIncludedItem>",
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
    return IncidentImportResponse.attributeTypeMap;
  }

  public constructor() {}
}
