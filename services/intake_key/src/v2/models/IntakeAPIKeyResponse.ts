import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntakeAPIKeyData } from "./IntakeAPIKeyData";

/**
 * Response containing an intake API key for the authenticated cloud workload.
 */
export class IntakeAPIKeyResponse {
  /**
   * An intake API key resource.
   */
  "data": IntakeAPIKeyData;
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
      type: "IntakeAPIKeyData",
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
    return IntakeAPIKeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
