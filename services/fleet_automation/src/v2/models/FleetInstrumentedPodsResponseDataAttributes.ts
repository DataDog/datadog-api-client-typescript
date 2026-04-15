import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetInstrumentedPodGroupAttributes } from "./FleetInstrumentedPodGroupAttributes";

/**
 * Attributes of the instrumented pods response containing the list of pod groups.
 */
export class FleetInstrumentedPodsResponseDataAttributes {
  /**
   * Array of instrumented pod groups in the cluster.
   */
  "groups"?: Array<FleetInstrumentedPodGroupAttributes>;
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
    groups: {
      baseName: "groups",
      type: "Array<FleetInstrumentedPodGroupAttributes>",
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
    return FleetInstrumentedPodsResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
