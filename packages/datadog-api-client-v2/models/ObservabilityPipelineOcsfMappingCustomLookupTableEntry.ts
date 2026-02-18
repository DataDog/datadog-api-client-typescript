/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single entry in a lookup table for value transformation.
 */
export class ObservabilityPipelineOcsfMappingCustomLookupTableEntry {
  /**
   * The substring to match in the source value.
   */
  "contains"?: string;
  /**
   * The exact value to match in the source.
   */
  "equals"?: any;
  /**
   * The source field to match against.
   */
  "equalsSource"?: string;
  /**
   * A regex pattern to match in the source value.
   */
  "matches"?: string;
  /**
   * A regex pattern that must not match the source value.
   */
  "notMatches"?: string;
  /**
   * The value to use when a match is found.
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
    contains: {
      baseName: "contains",
      type: "string",
    },
    equals: {
      baseName: "equals",
      type: "any",
    },
    equalsSource: {
      baseName: "equals_source",
      type: "string",
    },
    matches: {
      baseName: "matches",
      type: "string",
    },
    notMatches: {
      baseName: "not_matches",
      type: "string",
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
    return ObservabilityPipelineOcsfMappingCustomLookupTableEntry.attributeTypeMap;
  }

  public constructor() {}
}
