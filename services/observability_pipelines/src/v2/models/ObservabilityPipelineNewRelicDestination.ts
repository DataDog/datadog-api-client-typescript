import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineBufferOptions } from "./ObservabilityPipelineBufferOptions";
import { ObservabilityPipelineNewRelicDestinationRegion } from "./ObservabilityPipelineNewRelicDestinationRegion";
import { ObservabilityPipelineNewRelicDestinationType } from "./ObservabilityPipelineNewRelicDestinationType";

/**
 * The `new_relic` destination sends logs to the New Relic platform.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineNewRelicDestination {
  /**
   * Configuration for buffer settings on destination components.
   */
  "buffer"?: ObservabilityPipelineBufferOptions;
  /**
   * The unique identifier for this component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * The New Relic region.
   */
  "region": ObservabilityPipelineNewRelicDestinationRegion;
  /**
   * The destination type. The value should always be `new_relic`.
   */
  "type": ObservabilityPipelineNewRelicDestinationType;
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
    buffer: {
      baseName: "buffer",
      type: "ObservabilityPipelineBufferOptions",
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
    region: {
      baseName: "region",
      type: "ObservabilityPipelineNewRelicDestinationRegion",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineNewRelicDestinationType",
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
    return ObservabilityPipelineNewRelicDestination.attributeTypeMap;
  }

  public constructor() {}
}
