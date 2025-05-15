import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSensitiveDataScannerProcessorRule } from "./ObservabilityPipelineSensitiveDataScannerProcessorRule";
import { ObservabilityPipelineSensitiveDataScannerProcessorType } from "./ObservabilityPipelineSensitiveDataScannerProcessorType";

/**
 * The `sensitive_data_scanner` processor detects and optionally redacts sensitive data in log events.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessor {
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
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
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
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
