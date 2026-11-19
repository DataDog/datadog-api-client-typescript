import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentInvestigationCreateData } from "./SecurityAgentInvestigationCreateData";

/**
 * Request to start an investigation of a signal.
 */
export class SecurityAgentInvestigationCreateRequest {
  /**
   * The investigation to start.
   */
  "data": SecurityAgentInvestigationCreateData;
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
      type: "SecurityAgentInvestigationCreateData",
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
    return SecurityAgentInvestigationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
