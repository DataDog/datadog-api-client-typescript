import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetAgentVersionAttributes } from "./FleetAgentVersionAttributes";
import { FleetAgentVersionResourceType } from "./FleetAgentVersionResourceType";

/**
 * Represents an available Datadog Agent version.
 */
export class FleetAgentVersion {
  "attributes"?: FleetAgentVersionAttributes;
  /**
   * Unique identifier for the Agent version (same as version).
   */
  "id": string;
  /**
   * The type of Agent version resource.
   */
  "type": FleetAgentVersionResourceType;
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
      type: "FleetAgentVersionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetAgentVersionResourceType",
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
    return FleetAgentVersion.attributeTypeMap;
  }

  public constructor() {}
}
