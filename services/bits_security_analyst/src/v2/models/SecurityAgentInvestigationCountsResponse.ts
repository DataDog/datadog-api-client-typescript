import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationCountsData } from "./SecurityAgentInvestigationCountsData";

/**
 * Completed investigations counted by the values of one field.
 */
export class SecurityAgentInvestigationCountsResponse {
  /**
   * Counts of completed investigations.
   */
  "data": SecurityAgentInvestigationCountsData;
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
      type: "SecurityAgentInvestigationCountsData",
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
    return SecurityAgentInvestigationCountsResponse.attributeTypeMap;
  }

  public constructor() {}
}
