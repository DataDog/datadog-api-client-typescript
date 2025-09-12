import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppCreatePipelineEventRequestDataSingleOrArray } from "./CIAppCreatePipelineEventRequestDataSingleOrArray";

/**
 * Request object.
 */
export class CIAppCreatePipelineEventRequest {
  /**
   * Data of the pipeline events to create.
   */
  "data"?: CIAppCreatePipelineEventRequestDataSingleOrArray;
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
      type: "CIAppCreatePipelineEventRequestDataSingleOrArray",
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
    return CIAppCreatePipelineEventRequest.attributeTypeMap;
  }

  public constructor() {}
}
