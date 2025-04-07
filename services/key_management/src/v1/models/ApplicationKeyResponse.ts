import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationKey } from "./ApplicationKey";

/**
 * An application key response.
 */
export class ApplicationKeyResponse {
  /**
   * An application key with its associated metadata.
   */
  "applicationKey"?: ApplicationKey;
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
    applicationKey: {
      baseName: "application_key",
      type: "ApplicationKey",
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
    return ApplicationKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
