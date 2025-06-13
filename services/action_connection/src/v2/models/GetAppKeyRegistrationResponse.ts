import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppKeyRegistrationData } from "./AppKeyRegistrationData";

/**
 * The response object after getting an app key registration.
 */
export class GetAppKeyRegistrationResponse {
  /**
   * Data related to the app key registration.
   */
  "data"?: AppKeyRegistrationData;
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
    data: {
      baseName: "data",
      type: "AppKeyRegistrationData",
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
    return GetAppKeyRegistrationResponse.attributeTypeMap;
  }

  public constructor() {}
}
