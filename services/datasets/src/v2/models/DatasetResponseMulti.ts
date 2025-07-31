import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetResponse } from "./DatasetResponse";

/**
 * Response containing a list of datasets.
 */
export class DatasetResponseMulti {
  /**
   * The list of datasets returned in response.
   */
  "data"?: Array<DatasetResponse>;
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
      type: "Array<DatasetResponse>",
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
    return DatasetResponseMulti.attributeTypeMap;
  }

  public constructor() {}
}
