import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentVersion } from "./FleetAgentVersion";

/**
 * Response containing a list of available Agent versions.
 */
export class FleetAgentVersionsResponse {
  /**
   * Array of available Agent versions.
   */
  "data": Array<FleetAgentVersion>;
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
      type: "Array<FleetAgentVersion>",
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
    return FleetAgentVersionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
