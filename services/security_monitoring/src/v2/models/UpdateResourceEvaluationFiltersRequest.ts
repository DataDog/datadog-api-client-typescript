import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateResourceEvaluationFiltersRequestData } from "./UpdateResourceEvaluationFiltersRequestData";

/**
 * Request object to update a resource filter.
 */
export class UpdateResourceEvaluationFiltersRequest {
  /**
   * The definition of `UpdateResourceFilterRequestData` object.
   */
  "data": UpdateResourceEvaluationFiltersRequestData;
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
      type: "UpdateResourceEvaluationFiltersRequestData",
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
    return UpdateResourceEvaluationFiltersRequest.attributeTypeMap;
  }

  public constructor() {}
}
