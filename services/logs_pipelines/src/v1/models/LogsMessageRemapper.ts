import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsMessageRemapperType } from "./LogsMessageRemapperType";

/**
 * The message is a key attribute in Datadog.
 * It is displayed in the message column of the Log Explorer and you can do full string search on it.
 * Use this Processor to define one or more attributes as the official log message.
 *
 * **Note:** If multiple log message remapper processors can be applied to a given log,
 * only the first one (according to the pipeline order) is taken into account.
 */
export class LogsMessageRemapper {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Array of source attributes.
   */
  "sources": Array<string>;
  /**
   * Type of logs message remapper.
   */
  "type": LogsMessageRemapperType;
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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsMessageRemapperType",
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
    return LogsMessageRemapper.attributeTypeMap;
  }

  public constructor() {}
}
