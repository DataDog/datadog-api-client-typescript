import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArrayProcessorOperationLengthType } from "./LogsArrayProcessorOperationLengthType";

/**
 * Operation that computes the length of a `source` array and stores the result in the `target` attribute.
 */
export class LogsArrayProcessorOperationLength {
  /**
   * Attribute path of the array to measure.
   */
  "source": string;
  /**
   * Attribute that receives the computed length.
   */
  "target": string;
  /**
   * Operation type.
   */
  "type": LogsArrayProcessorOperationLengthType;
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
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsArrayProcessorOperationLengthType",
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
    return LogsArrayProcessorOperationLength.attributeTypeMap;
  }

  public constructor() {}
}
