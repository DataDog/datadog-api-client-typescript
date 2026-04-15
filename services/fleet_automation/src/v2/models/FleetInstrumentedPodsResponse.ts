import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetInstrumentedPodsResponseData } from "./FleetInstrumentedPodsResponseData";

/**
 * Response containing instrumented pods for a Kubernetes cluster.
 */
export class FleetInstrumentedPodsResponse {
  /**
   * The response data containing the cluster name and instrumented pod groups.
   */
  "data": FleetInstrumentedPodsResponseData;
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
      type: "FleetInstrumentedPodsResponseData",
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
    return FleetInstrumentedPodsResponse.attributeTypeMap;
  }

  public constructor() {}
}
