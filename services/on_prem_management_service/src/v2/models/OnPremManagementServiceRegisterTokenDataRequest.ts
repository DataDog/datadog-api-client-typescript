import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnPremManagementServiceRegisterTokenAttributes } from "./OnPremManagementServiceRegisterTokenAttributes";
import { OnPremManagementServiceRegisterTokenType } from "./OnPremManagementServiceRegisterTokenType";

/**
 * Data for registering a token.
 */
export class OnPremManagementServiceRegisterTokenDataRequest {
  /**
   * Attributes for registering a token.
   */
  "attributes": OnPremManagementServiceRegisterTokenAttributes;
  /**
   * The type of the resource. The value should always be registerTokenRequest.
   */
  "type": OnPremManagementServiceRegisterTokenType;
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
    attributes: {
      baseName: "attributes",
      type: "OnPremManagementServiceRegisterTokenAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnPremManagementServiceRegisterTokenType",
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
    return OnPremManagementServiceRegisterTokenDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
