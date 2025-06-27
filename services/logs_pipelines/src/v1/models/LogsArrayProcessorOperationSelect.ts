import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArrayProcessorOperationSelectType } from "./LogsArrayProcessorOperationSelectType";

/**
 * Operation that finds an object in a `source` array using a `filter`, and then extracts a specific value into the `target` attribute.
 */
export class LogsArrayProcessorOperationSelect {
  /**
   * Filter condition expressed as `key:value` used to find the matching element.
   */
  "filter": string;
  /**
   * Attribute path of the array to search into.
   */
  "source": string;
  /**
   * Attribute that receives the extracted value.
   */
  "target": string;
  /**
   * Operation type.
   */
  "type": LogsArrayProcessorOperationSelectType;
  /**
   * Key of the value to extract from the matching element.
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
    filter: {
      baseName: "filter",
      type: "string",
      required: true,
    },
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
      type: "LogsArrayProcessorOperationSelectType",
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
    return LogsArrayProcessorOperationSelect.attributeTypeMap;
  }

  public constructor() {}
}
