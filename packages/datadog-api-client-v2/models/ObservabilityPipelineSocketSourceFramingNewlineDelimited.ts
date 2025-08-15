/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSocketSourceFramingNewlineDelimitedMethod } from "./ObservabilityPipelineSocketSourceFramingNewlineDelimitedMethod";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Byte frames which are delimited by a newline character.
 */
export class ObservabilityPipelineSocketSourceFramingNewlineDelimited {
  /**
   * Byte frames which are delimited by a newline character.
   */
  "method": ObservabilityPipelineSocketSourceFramingNewlineDelimitedMethod;

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
    method: {
      baseName: "method",
      type: "ObservabilityPipelineSocketSourceFramingNewlineDelimitedMethod",
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
    return ObservabilityPipelineSocketSourceFramingNewlineDelimited.attributeTypeMap;
  }

  public constructor() {}
}
