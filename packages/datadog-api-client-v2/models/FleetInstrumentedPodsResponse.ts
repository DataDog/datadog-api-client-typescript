/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetInstrumentedPodsResponseData } from "./FleetInstrumentedPodsResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
