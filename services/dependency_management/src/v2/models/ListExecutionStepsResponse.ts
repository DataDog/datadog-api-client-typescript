import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListExecutionStepsData } from "./ListExecutionStepsData";

/**
 * Response containing the execution steps for a workflow execution.
 */
export class ListExecutionStepsResponse {
  /**
   * Data for execution steps response.
   */
  "data": ListExecutionStepsData;
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
      type: "ListExecutionStepsData",
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
    return ListExecutionStepsResponse.attributeTypeMap;
  }

  public constructor() {}
}
