import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationForwardDestinationSplunkType } from "./CustomDestinationForwardDestinationSplunkType";

/**
 * The Splunk HTTP Event Collector (HEC) destination.
 */
export class CustomDestinationForwardDestinationSplunk {
  /**
   * Access token of the Splunk HTTP Event Collector. This field is not returned by the API.
   */
  "accessToken": string;
  /**
   * The destination for which logs will be forwarded to.
   * Must have HTTPS scheme and forwarding back to Datadog is not allowed.
   */
  "endpoint": string;
  /**
   * Type of the Splunk HTTP Event Collector (HEC) destination.
   */
  "type": CustomDestinationForwardDestinationSplunkType;
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
    accessToken: {
      baseName: "access_token",
      type: "string",
      required: true,
    },
    endpoint: {
      baseName: "endpoint",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationForwardDestinationSplunkType",
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
    return CustomDestinationForwardDestinationSplunk.attributeTypeMap;
  }

  public constructor() {}
}
