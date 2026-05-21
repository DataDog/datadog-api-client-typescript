import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAutomationDataDataRequest } from "./IncidentAutomationDataDataRequest";

/**
 * Request to upsert automation data.
 */
export class IncidentAutomationDataRequest {
  /**
   * Automation data for a request.
   */
  "data": IncidentAutomationDataDataRequest;
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
      type: "IncidentAutomationDataDataRequest",
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
    return IncidentAutomationDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
