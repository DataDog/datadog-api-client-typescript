/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorActionRedact` object.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorActionRedact {
  /**
   * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction` object.
   */
  "action": ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction;
  /**
   * The definition of `ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions` object.
   */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions;

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
    action: {
      baseName: "action",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorActionRedactAction",
      required: true,
    },
    options: {
      baseName: "options",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorActionRedactOptions",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorActionRedact.attributeTypeMap;
  }

  public constructor() {}
}
