import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationData } from "./SecurityAgentInvestigationData";

/**
 * An investigation.
 */
export class SecurityAgentInvestigationResponse {
  /**
   * An investigation and its content. `attributes` is absent when `fields[investigations]` is empty or lists
   * only attributes the investigation doesn't have.
   */
  "data": SecurityAgentInvestigationData;
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
      type: "SecurityAgentInvestigationData",
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
    return SecurityAgentInvestigationResponse.attributeTypeMap;
  }

  public constructor() {}
}
