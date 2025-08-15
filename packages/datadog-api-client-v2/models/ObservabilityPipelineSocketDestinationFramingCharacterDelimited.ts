/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSocketDestinationFramingCharacterDelimitedMethod } from "./ObservabilityPipelineSocketDestinationFramingCharacterDelimitedMethod";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Each log event is separated using the specified delimiter character.
 */
export class ObservabilityPipelineSocketDestinationFramingCharacterDelimited {
  /**
   * A single ASCII character used as a delimiter.
   */
  "delimiter": string;
  /**
   * The definition of `ObservabilityPipelineSocketDestinationFramingCharacterDelimitedMethod` object.
   */
  "method": ObservabilityPipelineSocketDestinationFramingCharacterDelimitedMethod;

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
    delimiter: {
      baseName: "delimiter",
      type: "string",
      required: true,
    },
    method: {
      baseName: "method",
      type: "ObservabilityPipelineSocketDestinationFramingCharacterDelimitedMethod",
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
    return ObservabilityPipelineSocketDestinationFramingCharacterDelimited.attributeTypeMap;
  }

  public constructor() {}
}
