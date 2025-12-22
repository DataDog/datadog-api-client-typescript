import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineOpenSearchDestinationType } from "./ObservabilityPipelineOpenSearchDestinationType";

/**
 * The `opensearch` destination writes logs to an OpenSearch cluster.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineOpenSearchDestination {
  /**
   * The index to write logs to.
   */
  "bulkIndex"?: string;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The destination type. The value should always be `opensearch`.
   */
  "type": ObservabilityPipelineOpenSearchDestinationType;
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
    bulkIndex: {
      baseName: "bulk_index",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineOpenSearchDestinationType",
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
    return ObservabilityPipelineOpenSearchDestination.attributeTypeMap;
  }

  public constructor() {}
}
