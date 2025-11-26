/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorRule } from "./ObservabilityPipelineSensitiveDataScannerProcessorRule";
import { ObservabilityPipelineSensitiveDataScannerProcessorType } from "./ObservabilityPipelineSensitiveDataScannerProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `sensitive_data_scanner` processor detects and optionally redacts sensitive data in log events.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessor {
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of rules for identifying and acting on sensitive data patterns.
   */
  "rules": Array<ObservabilityPipelineSensitiveDataScannerProcessorRule>;
  /**
   * The processor type. The value should always be `sensitive_data_scanner`.
   */
  "type": ObservabilityPipelineSensitiveDataScannerProcessorType;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<ObservabilityPipelineSensitiveDataScannerProcessorRule>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorType",
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
    return ObservabilityPipelineSensitiveDataScannerProcessor.attributeTypeMap;
  }

  public constructor() {}
}
