import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageDataObject } from "./UsageDataObject";

/**
 * Application Security Monitoring usage response.
 */
export class UsageApplicationSecurityMonitoringResponse {
  /**
   * Response containing Application Security Monitoring usage.
   */
  "data"?: Array<UsageDataObject>;
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
      type: "Array<UsageDataObject>",
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
    return UsageApplicationSecurityMonitoringResponse.attributeTypeMap;
  }

  public constructor() {}
}
