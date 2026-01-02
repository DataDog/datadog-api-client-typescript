import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineCloudPremDestinationType } from "./ObservabilityPipelineCloudPremDestinationType";

/**
 * The `cloud_prem` destination sends logs to Datadog CloudPrem.
 */
export class ObservabilityPipelineCloudPremDestination {
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The destination type. The value should always be `cloud_prem`.
   */
  "type": ObservabilityPipelineCloudPremDestinationType;
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
      type: "ObservabilityPipelineCloudPremDestinationType",
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
    return ObservabilityPipelineCloudPremDestination.attributeTypeMap;
  }

  public constructor() {}
}
