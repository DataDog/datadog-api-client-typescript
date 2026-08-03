import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentVersionV2Attributes } from "./FleetAgentVersionV2Attributes";
import { FleetAgentVersionV2ResourceType } from "./FleetAgentVersionV2ResourceType";

/**
 * An available Datadog Agent version resource.
 */
export class FleetAgentVersionV2 {
  /**
   * Attributes of an available Datadog Agent version.
   */
  "attributes": FleetAgentVersionV2Attributes;
  /**
   * The agent version string used as the unique identifier.
   */
  "id": string;
  /**
   * The type of the agent version resource.
   */
  "type": FleetAgentVersionV2ResourceType;
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
      type: "FleetAgentVersionV2Attributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetAgentVersionV2ResourceType",
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
    return FleetAgentVersionV2.attributeTypeMap;
  }

  public constructor() {}
}
