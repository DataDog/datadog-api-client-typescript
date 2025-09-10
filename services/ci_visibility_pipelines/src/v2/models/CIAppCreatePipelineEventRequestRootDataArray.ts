import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppCreatePipelineEventRequestData } from "./CIAppCreatePipelineEventRequestData";

/**
 * Data of the pipeline events to create.
 */
export class CIAppCreatePipelineEventRequestRootDataArray {
  /**
   * Array of pipeline events to create in batch.
   */
  "data"?: Array<CIAppCreatePipelineEventRequestData>;
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
      type: "Array<CIAppCreatePipelineEventRequestData>",
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
    return CIAppCreatePipelineEventRequestRootDataArray.attributeTypeMap;
  }

  public constructor() {}
}
