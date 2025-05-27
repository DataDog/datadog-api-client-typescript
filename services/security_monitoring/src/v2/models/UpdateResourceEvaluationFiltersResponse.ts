import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateResourceEvaluationFiltersResponseData } from "./UpdateResourceEvaluationFiltersResponseData";

/**
 * The definition of `UpdateResourceEvaluationFiltersResponse` object.
 */
export class UpdateResourceEvaluationFiltersResponse {
  /**
   * The definition of `UpdateResourceFilterResponseData` object.
   */
  "data": UpdateResourceEvaluationFiltersResponseData;
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
      type: "UpdateResourceEvaluationFiltersResponseData",
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
    return UpdateResourceEvaluationFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
