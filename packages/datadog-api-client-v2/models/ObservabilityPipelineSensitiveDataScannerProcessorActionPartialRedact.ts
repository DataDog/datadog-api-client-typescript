/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction";
import { ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for partially redacting matched sensitive data.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact {
  /**
   * Action type that redacts part of the sensitive data while preserving a configurable number of characters, typically used for masking purposes (e.g., show last 4 digits of a credit card).
   */
  "action": ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction;
  /**
   * Controls how partial redaction is applied, including character count and direction.
   */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions;

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
      type: "ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactAction",
      required: true,
    },
    options: {
      baseName: "options",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptions",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedact.attributeTypeMap;
  }

  public constructor() {}
}
