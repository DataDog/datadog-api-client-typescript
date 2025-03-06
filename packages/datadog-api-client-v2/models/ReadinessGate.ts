/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReadinessGateThresholdType } from "./ReadinessGateThresholdType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Used to merge multiple branches into a single branch.
 */
export class ReadinessGate {
  /**
   * The definition of `ReadinessGateThresholdType` object.
   */
  "thresholdType": ReadinessGateThresholdType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    thresholdType: {
      baseName: "thresholdType",
      type: "ReadinessGateThresholdType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ReadinessGate.attributeTypeMap;
  }

  public constructor() {}
}
