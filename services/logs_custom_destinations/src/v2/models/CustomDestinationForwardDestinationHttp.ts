import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomDestinationForwardDestinationHttpType } from "./CustomDestinationForwardDestinationHttpType";
import { CustomDestinationHttpDestinationAuth } from "./CustomDestinationHttpDestinationAuth";

/**
 * The HTTP destination.
 */
export class CustomDestinationForwardDestinationHttp {
  /**
   * Authentication method of the HTTP requests.
   */
  "auth": CustomDestinationHttpDestinationAuth;
  /**
   * The destination for which logs will be forwarded to.
   * Must have HTTPS scheme and forwarding back to Datadog is not allowed.
   */
  "endpoint": string;
  /**
   * Type of the HTTP destination.
   */
  "type": CustomDestinationForwardDestinationHttpType;
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
    auth: {
      baseName: "auth",
      type: "CustomDestinationHttpDestinationAuth",
      required: true,
    },
    endpoint: {
      baseName: "endpoint",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomDestinationForwardDestinationHttpType",
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
    return CustomDestinationForwardDestinationHttp.attributeTypeMap;
  }

  public constructor() {}
}
