import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSumoLogicSourceType } from "./ObservabilityPipelineSumoLogicSourceType";

/**
 * The `sumo_logic` source receives logs from Sumo Logic collectors.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineSumoLogicSource {
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * The source type. The value should always be `sumo_logic`.
   */
  "type": ObservabilityPipelineSumoLogicSourceType;
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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSumoLogicSourceType",
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
    return ObservabilityPipelineSumoLogicSource.attributeTypeMap;
  }

  public constructor() {}
}
