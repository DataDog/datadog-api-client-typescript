import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationResponseForwardDestinationSplunkType } from "./CustomDestinationResponseForwardDestinationSplunkType";

/**
 * The Splunk HTTP Event Collector (HEC) destination.
 */
export class CustomDestinationResponseForwardDestinationSplunk {
  /**
   * The destination for which logs will be forwarded to.
   * Must have HTTPS scheme and forwarding back to Datadog is not allowed.
   */
  "endpoint": string;
  /**
   * Type of the Splunk HTTP Event Collector (HEC) destination.
   */
  "type": CustomDestinationResponseForwardDestinationSplunkType;
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
    endpoint: {
      baseName: "endpoint",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationResponseForwardDestinationSplunkType",
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
    return CustomDestinationResponseForwardDestinationSplunk.attributeTypeMap;
  }

  public constructor() {}
}
