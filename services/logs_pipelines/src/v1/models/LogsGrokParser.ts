import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsGrokParserRules } from "./LogsGrokParserRules";
import { LogsGrokParserType } from "./LogsGrokParserType";

/**
 * Create custom grok rules to parse the full message or [a specific attribute of your raw event](https://docs.datadoghq.com/logs/log_configuration/parsing/#advanced-settings).
 * For more information, see the [parsing section](https://docs.datadoghq.com/logs/log_configuration/parsing).
 */
export class LogsGrokParser {
  /**
   * Set of rules for the grok parser.
   */
  "grok": LogsGrokParserRules;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * List of sample logs to test this grok parser.
   */
  "samples"?: Array<string>;
  /**
   * Name of the log attribute to parse.
   */
  "source": string;
  /**
   * Type of logs grok parser.
   */
  "type": LogsGrokParserType;
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
    grok: {
      baseName: "grok",
      type: "LogsGrokParserRules",
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
    samples: {
      baseName: "samples",
      type: "Array<string>",
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsGrokParserType",
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
    return LogsGrokParser.attributeTypeMap;
  }

  public constructor() {}
}
