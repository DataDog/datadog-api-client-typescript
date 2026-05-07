import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An IP attribute with its sources.
 */
export class TransportWebhookLogIpAttribute {
  /**
   * The IP address.
   */
  "ip"?: string;
  /**
   * The transport providers or systems that reported this IP address.
   */
  "source"?: Array<string>;
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
    ip: {
      baseName: "ip",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "Array<string>",
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
    return TransportWebhookLogIpAttribute.attributeTypeMap;
  }

  public constructor() {}
}
