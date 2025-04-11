import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Set of rules for the grok parser.
 */
export class LogsGrokParserRules {
  /**
   * List of match rules for the grok parser, separated by a new line.
   */
  "matchRules": string;
  /**
   * List of support rules for the grok parser, separated by a new line.
   */
  "supportRules"?: string;
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
    matchRules: {
      baseName: "match_rules",
      type: "string",
      required: true,
    },
    supportRules: {
      baseName: "support_rules",
      type: "string",
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
    return LogsGrokParserRules.attributeTypeMap;
  }

  public constructor() {}
}
