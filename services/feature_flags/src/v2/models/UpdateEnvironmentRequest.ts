import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateEnvironmentData } from "./UpdateEnvironmentData";

/**
 * Request to update an environment.
 */
export class UpdateEnvironmentRequest {
  /**
   * Data for updating an environment.
   */
  "data": UpdateEnvironmentData;
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
      type: "UpdateEnvironmentData",
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
    return UpdateEnvironmentRequest.attributeTypeMap;
  }

  public constructor() {}
}
