/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineOcsfMappingCustomLookupTableEntry } from "./ObservabilityPipelineOcsfMappingCustomLookupTableEntry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
