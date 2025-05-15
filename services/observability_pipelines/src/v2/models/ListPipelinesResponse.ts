import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListPipelinesResponseMeta } from "./ListPipelinesResponseMeta";
import { ObservabilityPipelineData } from "./ObservabilityPipelineData";

/**
 * Represents the response payload containing a list of pipelines and associated metadata.
 */
export class ListPipelinesResponse {
  /**
   * The `schema` `data`.
   */
  "data": Array<ObservabilityPipelineData>;
  /**
   * Metadata about the response.
   */
  "meta"?: ListPipelinesResponseMeta;
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
      type: "Array<ObservabilityPipelineData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListPipelinesResponseMeta",
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
    return ListPipelinesResponse.attributeTypeMap;
  }

  public constructor() {}
}
