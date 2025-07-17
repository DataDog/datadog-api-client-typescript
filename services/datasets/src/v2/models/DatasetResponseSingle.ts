import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Dataset } from "./Dataset";

/**
 * Response containing a single dataset object.
 */
export class DatasetResponseSingle {
  /**
   * Dataset object.
   */
  "data": Dataset;
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
      type: "Dataset",
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
    return DatasetResponseSingle.attributeTypeMap;
  }

  public constructor() {}
}
