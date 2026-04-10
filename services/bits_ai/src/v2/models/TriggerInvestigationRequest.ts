import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TriggerInvestigationRequestData } from "./TriggerInvestigationRequestData";

/**
 * Request to trigger a new investigation.
 */
export class TriggerInvestigationRequest {
  /**
   * Data for the trigger investigation request.
   */
  "data": TriggerInvestigationRequestData;
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
      type: "TriggerInvestigationRequestData",
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
    return TriggerInvestigationRequest.attributeTypeMap;
  }

  public constructor() {}
}
