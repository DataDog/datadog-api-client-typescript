import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentsResponseData } from "./FleetAgentsResponseData";
import { FleetAgentsResponseMeta } from "./FleetAgentsResponseMeta";

/**
 * Response containing a paginated list of Datadog Agents.
 */
export class FleetAgentsResponse {
  /**
   * The response data containing status and agents array.
   */
  "data": FleetAgentsResponseData;
  /**
   * Metadata for the list of agents response.
   */
  "meta"?: FleetAgentsResponseMeta;
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
      type: "FleetAgentsResponseData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetAgentsResponseMeta",
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
    return FleetAgentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
