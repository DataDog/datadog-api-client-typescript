import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Twilio messages logs dataflow.
 */
export class TwilioMessagesLogsIntegrationDataflowRequest {
  /**
   * Whether the Twilio dataflow is enabled.
   */
  "enabled"?: boolean;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
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
    return TwilioMessagesLogsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
