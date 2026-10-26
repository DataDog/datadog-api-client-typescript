import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueSampleAttributes } from "./IssueSampleAttributes";
import { IssueSampleType } from "./IssueSampleType";

/**
 * An error event of the issue, picked because it satisfies one or more sample biases.
 */
export class IssueSample {
  /**
   * Object containing the information of a sample.
   */
  "attributes": IssueSampleAttributes;
  /**
   * Sample identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueSampleType;
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
      type: "IssueSampleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssueSampleType",
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
    return IssueSample.attributeTypeMap;
  }

  public constructor() {}
}
