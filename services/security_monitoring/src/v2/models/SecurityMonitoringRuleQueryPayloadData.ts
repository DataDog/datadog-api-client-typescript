import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Payload used to test the rule query.
 */
export class SecurityMonitoringRuleQueryPayloadData {
  /**
   * Source of the payload.
   */
  "ddsource"?: string;
  /**
   * Tags associated with your data.
   */
  "ddtags"?: string;
  /**
   * The name of the originating host of the log.
   */
  "hostname"?: string;
  /**
   * The message of the payload.
   */
  "message"?: string;
  /**
   * The name of the application or service generating the data.
   */
  "service"?: string;
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
    ddsource: {
      baseName: "ddsource",
      type: "string",
    },
    ddtags: {
      baseName: "ddtags",
      type: "string",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    service: {
      baseName: "service",
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
    return SecurityMonitoringRuleQueryPayloadData.attributeTypeMap;
  }

  public constructor() {}
}
