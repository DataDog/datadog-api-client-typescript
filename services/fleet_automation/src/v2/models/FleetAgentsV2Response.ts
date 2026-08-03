import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentsV2ResponseMeta } from "./FleetAgentsV2ResponseMeta";
import { FleetAgentV2 } from "./FleetAgentV2";

/**
 * Response containing a paginated list of Datadog Agents.
 */
export class FleetAgentsV2Response {
  /**
   * Array of agents matching the query criteria.
   */
  "data": Array<FleetAgentV2>;
  /**
   * Metadata for the v2 list of agents, including pagination information.
   */
  "meta"?: FleetAgentsV2ResponseMeta;
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
      type: "Array<FleetAgentV2>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetAgentsV2ResponseMeta",
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
    return FleetAgentsV2Response.attributeTypeMap;
  }

  public constructor() {}
}
