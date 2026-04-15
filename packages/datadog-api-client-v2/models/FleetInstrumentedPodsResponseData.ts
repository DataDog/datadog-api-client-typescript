/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetInstrumentedPodsResponseDataAttributes } from "./FleetInstrumentedPodsResponseDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response data containing the cluster name and instrumented pod groups.
 */
export class FleetInstrumentedPodsResponseData {
  /**
   * Attributes of the instrumented pods response containing the list of pod groups.
   */
  "attributes": FleetInstrumentedPodsResponseDataAttributes;
  /**
   * The cluster name identifier.
   */
  "id": string;
  /**
   * Resource type.
   */
  "type": string;

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
      type: "FleetInstrumentedPodsResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return FleetInstrumentedPodsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
