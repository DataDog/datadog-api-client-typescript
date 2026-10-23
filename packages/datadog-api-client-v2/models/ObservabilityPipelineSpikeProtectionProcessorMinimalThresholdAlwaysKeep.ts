/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType } from "./ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Never activates spike protection for the matching partition, regardless of volume.
 */
export class ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep {
  /**
   * The minimal threshold type. The value should always be `always_keep`.
   */
  "type": ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType;

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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeepType",
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
    return ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep.attributeTypeMap;
  }

  public constructor() {}
}
