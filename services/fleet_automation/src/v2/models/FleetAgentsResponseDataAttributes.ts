import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentAttributes } from "./FleetAgentAttributes";

export class FleetAgentsResponseDataAttributes {
  /**
   * Array of agents matching the query criteria.
   */
  "agents"?: Array<FleetAgentAttributes>;
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
    agents: {
      baseName: "agents",
      type: "Array<FleetAgentAttributes>",
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
    return FleetAgentsResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
