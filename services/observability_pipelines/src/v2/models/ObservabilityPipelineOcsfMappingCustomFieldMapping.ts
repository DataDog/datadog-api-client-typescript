import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineOcsfMappingCustomLookup } from "./ObservabilityPipelineOcsfMappingCustomLookup";

/**
 * Defines a single field mapping rule for transforming a source field to an OCSF destination field.
 */
export class ObservabilityPipelineOcsfMappingCustomFieldMapping {
  /**
   * The default value to use if the source field is missing or empty.
   */
  "_default"?: any;
  /**
   * The destination OCSF field path.
   */
  "dest": string;
  /**
   * Lookup table configuration for mapping source values to destination values.
   */
  "lookup"?: ObservabilityPipelineOcsfMappingCustomLookup;
  /**
   * The source field path from the log event.
   */
  "source"?: any;
  /**
   * Multiple source field paths for combined mapping.
   */
  "sources"?: any;
  /**
   * A static value to use for the destination field.
   */
  "value"?: any;
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
    _default: {
      baseName: "default",
      type: "any",
    },
    dest: {
      baseName: "dest",
      type: "string",
      required: true,
    },
    lookup: {
      baseName: "lookup",
      type: "ObservabilityPipelineOcsfMappingCustomLookup",
    },
    source: {
      baseName: "source",
      type: "any",
    },
    sources: {
      baseName: "sources",
      type: "any",
    },
    value: {
      baseName: "value",
      type: "any",
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
    return ObservabilityPipelineOcsfMappingCustomFieldMapping.attributeTypeMap;
  }

  public constructor() {}
}
