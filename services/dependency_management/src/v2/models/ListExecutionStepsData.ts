import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListExecutionStepsAttributes } from "./ListExecutionStepsAttributes";
import { ListExecutionStepsDataType } from "./ListExecutionStepsDataType";

/**
 * Data for execution steps response.
 */
export class ListExecutionStepsData {
  /**
   * Attributes of an execution steps response.
   */
  "attributes": ListExecutionStepsAttributes;
  /**
   * The unique identifier of the workflow execution.
   */
  "id": string;
  /**
   * The resource type for workflow execution steps.
   */
  "type": ListExecutionStepsDataType;
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
      type: "ListExecutionStepsAttributes",
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
      type: "ListExecutionStepsDataType",
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
    return ListExecutionStepsData.attributeTypeMap;
  }

  public constructor() {}
}
