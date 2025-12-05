import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentInfoAttributes } from "./FleetAgentInfoAttributes";
import { FleetAgentInfoResourceType } from "./FleetAgentInfoResourceType";

/**
 * Represents detailed information about a specific Datadog Agent.
 */
export class FleetAgentInfo {
  /**
   * Attributes for agent information.
   */
  "attributes": FleetAgentInfoAttributes;
  /**
   * The unique agent key identifier.
   */
  "id": string;
  /**
   * The type of Agent info resource.
   */
  "type": FleetAgentInfoResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "FleetAgentInfoAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetAgentInfoResourceType",
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
    return FleetAgentInfo.attributeTypeMap;
  }

  public constructor() {}
}
