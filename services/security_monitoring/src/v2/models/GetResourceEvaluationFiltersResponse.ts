import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetResourceEvaluationFiltersResponseData } from "./GetResourceEvaluationFiltersResponseData";

/**
 * The definition of `GetResourceEvaluationFiltersResponse` object.
 */
export class GetResourceEvaluationFiltersResponse {
  /**
   * The definition of `GetResourceFilterResponseData` object.
   */
  "data": GetResourceEvaluationFiltersResponseData;
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
      type: "GetResourceEvaluationFiltersResponseData",
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
    return GetResourceEvaluationFiltersResponse.attributeTypeMap;
  }

  public constructor() {}
}
