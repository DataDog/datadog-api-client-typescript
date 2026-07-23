import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PupBumpTestData } from "./PupBumpTestData";

/**
 * Response for the pup bump test endpoint.
 */
export class PupBumpTestResponse {
  /**
   * Pup bump test resource data.
   */
  "data": PupBumpTestData;
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
      type: "PupBumpTestData",
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
    return PupBumpTestResponse.attributeTypeMap;
  }

  public constructor() {}
}
