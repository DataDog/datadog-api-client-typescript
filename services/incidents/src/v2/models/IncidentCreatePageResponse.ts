import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreatePageResponseData } from "./IncidentCreatePageResponseData";

/**
 * Response from creating a page from an incident.
 */
export class IncidentCreatePageResponse {
  /**
   * Data from creating a page.
   */
  "data": IncidentCreatePageResponseData;
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
      type: "IncidentCreatePageResponseData",
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
    return IncidentCreatePageResponse.attributeTypeMap;
  }

  public constructor() {}
}
