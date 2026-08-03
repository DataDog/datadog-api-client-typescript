import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentsV2Page } from "./FleetAgentsV2Page";

/**
 * Metadata for the v2 list of agents, including pagination information.
 */
export class FleetAgentsV2ResponseMeta {
  /**
   * Pagination details for the v2 list of agents.
   */
  "page"?: FleetAgentsV2Page;
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
    page: {
      baseName: "page",
      type: "FleetAgentsV2Page",
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
    return FleetAgentsV2ResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
