import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListPROutputsAttributes } from "./ListPROutputsAttributes";
import { ListPROutputsDataType } from "./ListPROutputsDataType";

/**
 * Data for PR outputs response.
 */
export class ListPROutputsData {
  /**
   * Attributes of a PR outputs response.
   */
  "attributes": ListPROutputsAttributes;
  /**
   * The unique identifier of the workflow execution.
   */
  "id": string;
  /**
   * The resource type for workflow execution PR outputs.
   */
  "type": ListPROutputsDataType;
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
      type: "ListPROutputsAttributes",
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
      type: "ListPROutputsDataType",
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
    return ListPROutputsData.attributeTypeMap;
  }

  public constructor() {}
}
