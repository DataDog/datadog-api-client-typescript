import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsExcludeAttributeProcessorType } from "./LogsExcludeAttributeProcessorType";

/**
 * Use this processor to remove an attribute from a log during processing.
 * The processor strips the specified attribute from the log event, which is useful
 * when the attribute contains sensitive data or is no longer needed downstream.
 */
export class LogsExcludeAttributeProcessor {
  /**
   * Name of the log attribute to remove from the log event.
   */
  "attributeToExclude": string;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Type of logs exclude attribute processor.
   */
  "type": LogsExcludeAttributeProcessorType;
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
    attributeToExclude: {
      baseName: "attribute_to_exclude",
      type: "string",
      required: true,
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsExcludeAttributeProcessorType",
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
    return LogsExcludeAttributeProcessor.attributeTypeMap;
  }

  public constructor() {}
}
