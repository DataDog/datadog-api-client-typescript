import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabRunData } from "./ModelLabRunData";

/**
 * Response containing a single Model Lab run.
 */
export class ModelLabRunResponse {
  /**
   * A Model Lab run JSON:API resource object.
   */
  "data": ModelLabRunData;
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
      type: "ModelLabRunData",
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
    return ModelLabRunResponse.attributeTypeMap;
  }

  public constructor() {}
}
