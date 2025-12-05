import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentInfo } from "./FleetAgentInfo";

/**
 * Response containing detailed information about a specific agent.
 */
export class FleetAgentInfoResponse {
  /**
   * Represents detailed information about a specific Datadog Agent.
   */
  "data": FleetAgentInfo;
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
      type: "FleetAgentInfo",
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
    return FleetAgentInfoResponse.attributeTypeMap;
  }

  public constructor() {}
}
