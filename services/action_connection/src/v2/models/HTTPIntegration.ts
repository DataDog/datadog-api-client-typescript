import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPCredentials } from "./HTTPCredentials";
import { HTTPIntegrationType } from "./HTTPIntegrationType";

/**
 * The definition of `HTTPIntegration` object.
 */
export class HTTPIntegration {
  /**
   * Base HTTP url for the integration
   */
  "baseUrl": string;
  /**
   * The definition of `HTTPCredentials` object.
   */
  "credentials": HTTPCredentials;
  /**
   * The definition of `HTTPIntegrationType` object.
   */
  "type": HTTPIntegrationType;
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
    baseUrl: {
      baseName: "base_url",
      type: "string",
      required: true,
    },
    credentials: {
      baseName: "credentials",
      type: "HTTPCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HTTPIntegrationType",
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
    return HTTPIntegration.attributeTypeMap;
  }

  public constructor() {}
}
