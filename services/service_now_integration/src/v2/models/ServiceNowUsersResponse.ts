import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowUserData } from "./ServiceNowUserData";

/**
 * Response containing ServiceNow users
 */
export class ServiceNowUsersResponse {
  /**
   * Array of ServiceNow user data objects
   */
  "data": Array<ServiceNowUserData>;
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
      type: "Array<ServiceNowUserData>",
      required: true,
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
    return ServiceNowUsersResponse.attributeTypeMap;
  }

  public constructor() {}
}
