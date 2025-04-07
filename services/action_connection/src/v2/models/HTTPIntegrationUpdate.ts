import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPCredentialsUpdate } from "./HTTPCredentialsUpdate";
import { HTTPIntegrationType } from "./HTTPIntegrationType";

/**
 * The definition of `HTTPIntegrationUpdate` object.
 */
export class HTTPIntegrationUpdate {
  /**
   * Base HTTP url for the integration
   */
  "baseUrl"?: string;
  /**
   * The definition of `HTTPCredentialsUpdate` object.
   */
  "credentials"?: HTTPCredentialsUpdate;
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
    },
    credentials: {
      baseName: "credentials",
      type: "HTTPCredentialsUpdate",
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
    return HTTPIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
