import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnPremManagementServiceRegisterTokenDataRequest } from "./OnPremManagementServiceRegisterTokenDataRequest";

/**
 * Request to register a token for query execution.
 */
export class OnPremManagementServiceRegisterTokenRequest {
  /**
   * Data for registering a token.
   */
  "data": OnPremManagementServiceRegisterTokenDataRequest;
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
      type: "OnPremManagementServiceRegisterTokenDataRequest",
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
    return OnPremManagementServiceRegisterTokenRequest.attributeTypeMap;
  }

  public constructor() {}
}
