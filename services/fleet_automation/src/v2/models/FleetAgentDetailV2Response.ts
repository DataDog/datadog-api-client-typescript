import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentDetailV2 } from "./FleetAgentDetailV2";

/**
 * Response containing detailed information about a specific Datadog Agent.
 */
export class FleetAgentDetailV2Response {
  /**
   * Detailed information about a specific Datadog Agent.
   */
  "data": FleetAgentDetailV2;
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
      type: "FleetAgentDetailV2",
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
    return FleetAgentDetailV2Response.attributeTypeMap;
  }

  public constructor() {}
}
