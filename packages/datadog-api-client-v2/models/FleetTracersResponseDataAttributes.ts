/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetTracerAttributes } from "./FleetTracerAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
