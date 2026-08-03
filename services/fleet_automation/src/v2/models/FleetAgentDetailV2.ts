import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentDetailV2Attributes } from "./FleetAgentDetailV2Attributes";
import { FleetAgentV2ResourceType } from "./FleetAgentV2ResourceType";

/**
 * Detailed information about a specific Datadog Agent.
 */
export class FleetAgentDetailV2 {
  /**
   * Attributes for the v2 agent detail response.
   */
  "attributes": FleetAgentDetailV2Attributes;
  /**
   * The unique agent key identifier.
   */
  "id": string;
  /**
   * The type of the agent resource.
   */
  "type": FleetAgentV2ResourceType;
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
      type: "FleetAgentDetailV2Attributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetAgentV2ResourceType",
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
    return FleetAgentDetailV2.attributeTypeMap;
  }

  public constructor() {}
}
