import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnPremManagementServiceRegisterTokenResponseAttributes } from "./OnPremManagementServiceRegisterTokenResponseAttributes";
import { OnPremManagementServiceRegisterTokenResponseType } from "./OnPremManagementServiceRegisterTokenResponseType";

/**
 * Data for the registered token.
 */
export class OnPremManagementServiceRegisterTokenResponseData {
  /**
   * Attributes for the registered token.
   */
  "attributes": OnPremManagementServiceRegisterTokenResponseAttributes;
  /**
   * The token identifier.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be tokenDefinitions.
   */
  "type": OnPremManagementServiceRegisterTokenResponseType;
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
      type: "OnPremManagementServiceRegisterTokenResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "OnPremManagementServiceRegisterTokenResponseType",
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
    return OnPremManagementServiceRegisterTokenResponseData.attributeTypeMap;
  }

  public constructor() {}
}
