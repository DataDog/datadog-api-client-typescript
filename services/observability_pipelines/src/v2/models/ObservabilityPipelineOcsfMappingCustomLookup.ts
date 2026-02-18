import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineOcsfMappingCustomLookupTableEntry } from "./ObservabilityPipelineOcsfMappingCustomLookupTableEntry";

/**
 * Lookup table configuration for mapping source values to destination values.
 */
export class ObservabilityPipelineOcsfMappingCustomLookup {
  /**
   * The default value to use if no lookup match is found.
   */
  "_default"?: any;
  /**
   * A list of lookup table entries for value transformation.
   */
  "table"?: Array<ObservabilityPipelineOcsfMappingCustomLookupTableEntry>;
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
    table: {
      baseName: "table",
      type: "Array<ObservabilityPipelineOcsfMappingCustomLookupTableEntry>",
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
    return ObservabilityPipelineOcsfMappingCustomLookup.attributeTypeMap;
  }

  public constructor() {}
}
