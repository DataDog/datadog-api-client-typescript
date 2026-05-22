import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SignalEntitiesData } from "./SignalEntitiesData";

/**
 * Response containing entities related to a security signal.
 */
export class SignalEntitiesResponse {
  /**
   * Entities related to a security signal.
   */
  "data": SignalEntitiesData;
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
      type: "SignalEntitiesData",
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
    return SignalEntitiesResponse.attributeTypeMap;
  }

  public constructor() {}
}
