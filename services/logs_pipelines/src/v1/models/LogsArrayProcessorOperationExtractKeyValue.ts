import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArrayProcessorOperationExtractKeyValueType } from "./LogsArrayProcessorOperationExtractKeyValueType";

/**
 * Operation that extracts key-value pairs from a `source` array and stores the result in the `target` attribute.
 */
export class LogsArrayProcessorOperationExtractKeyValue {
  /**
   * Key of the attribute in each array element that holds the name to use for the extracted attribute.
   */
  "keyToExtract": string;
  /**
   * Whether to override the target element if it's already set.
   */
  "overrideOnConflict"?: boolean;
  /**
   * Attribute path of the array to extract key-value pairs from.
   */
  "source": string;
  /**
   * Attribute that receives the extracted key-value pairs. If not specified, the extracted attributes are added at the root level of the log.
   */
  "target"?: string;
  /**
   * Operation type.
   */
  "type": LogsArrayProcessorOperationExtractKeyValueType;
  /**
   * Key of the attribute in each array element that holds the value to use for the extracted attribute.
   */
  "valueToExtract": string;
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
    keyToExtract: {
      baseName: "key_to_extract",
      type: "string",
      required: true,
    },
    overrideOnConflict: {
      baseName: "override_on_conflict",
      type: "boolean",
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsArrayProcessorOperationExtractKeyValueType",
      required: true,
    },
    valueToExtract: {
      baseName: "value_to_extract",
      type: "string",
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
    return LogsArrayProcessorOperationExtractKeyValue.attributeTypeMap;
  }

  public constructor() {}
}
