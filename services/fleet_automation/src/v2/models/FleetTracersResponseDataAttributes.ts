import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetTracerAttributes } from "./FleetTracerAttributes";

/**
 * Attributes of the fleet tracers response containing the list of tracers.
 */
export class FleetTracersResponseDataAttributes {
  /**
   * Array of tracers matching the query criteria.
   */
  "tracers"?: Array<FleetTracerAttributes>;
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
    tracers: {
      baseName: "tracers",
      type: "Array<FleetTracerAttributes>",
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
    return FleetTracersResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
