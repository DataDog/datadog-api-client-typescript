import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomerOrgDisableRequestData } from "./CustomerOrgDisableRequestData";

/**
 * Request payload for disabling the authenticated customer organization.
 */
export class CustomerOrgDisableRequest {
  /**
   * Data object for a customer org disable request.
   */
  "data": CustomerOrgDisableRequestData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "CustomerOrgDisableRequestData",
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
    return CustomerOrgDisableRequest.attributeTypeMap;
  }

  public constructor() {}
}
