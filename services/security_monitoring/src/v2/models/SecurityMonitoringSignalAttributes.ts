import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The object containing all signal attributes and their
 * associated values.
 */
export class SecurityMonitoringSignalAttributes {
  /**
   * A JSON object of attributes in the security signal.
   */
  "custom"?: { [key: string]: any };
  /**
   * The message in the security signal defined by the rule that generated the signal.
   */
  "message"?: string;
  /**
   * An array of tags associated with the security signal.
   */
  "tags"?: Array<string>;
  /**
   * The timestamp of the security signal.
   */
  "timestamp"?: Date;
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
    custom: {
      baseName: "custom",
      type: "{ [key: string]: any; }",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
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
    return SecurityMonitoringSignalAttributes.attributeTypeMap;
  }

  public constructor() {}
}
