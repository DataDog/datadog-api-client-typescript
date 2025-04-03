import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceAccountCreateData } from "./ServiceAccountCreateData";

/**
 * Create a service account.
 */
export class ServiceAccountCreateRequest {
  /**
   * Object to create a service account User.
   */
  "data": ServiceAccountCreateData;
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
      type: "ServiceAccountCreateData",
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
    return ServiceAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
