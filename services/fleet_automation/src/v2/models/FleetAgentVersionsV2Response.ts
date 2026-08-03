import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentVersionsV2ResponseMeta } from "./FleetAgentVersionsV2ResponseMeta";
import { FleetAgentVersionV2 } from "./FleetAgentVersionV2";

/**
 * Response containing a list of available Datadog Agent versions.
 */
export class FleetAgentVersionsV2Response {
  /**
   * Array of available agent versions.
   */
  "data": Array<FleetAgentVersionV2>;
  /**
   * Metadata for the v2 list of agent versions.
   */
  "meta"?: FleetAgentVersionsV2ResponseMeta;
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
      type: "Array<FleetAgentVersionV2>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FleetAgentVersionsV2ResponseMeta",
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
    return FleetAgentVersionsV2Response.attributeTypeMap;
  }

  public constructor() {}
}
