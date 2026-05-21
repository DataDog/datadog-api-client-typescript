import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAutomationDataDataResponse } from "./IncidentAutomationDataDataResponse";

/**
 * Response with automation data.
 */
export class IncidentAutomationDataResponse {
  /**
   * Automation data in a response.
   */
  "data": IncidentAutomationDataDataResponse;
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
      type: "IncidentAutomationDataDataResponse",
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
    return IncidentAutomationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
