/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions";
import { ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType } from "./ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern` object.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern {
  /**
   * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions` object.
   */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions;
  /**
   * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType` object.
   */
  "type": ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType;

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
    options: {
      baseName: "options",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternOptions",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorCustomPatternType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineSensitiveDataScannerProcessorCustomPattern.attributeTypeMap;
  }

  public constructor() {}
}
