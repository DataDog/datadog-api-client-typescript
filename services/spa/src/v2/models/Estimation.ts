import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Cpu } from "./Cpu";

/**
 * Recommended resource values for a Spark driver or executor, derived from recent real usage metrics. Used by SPA to propose more efficient pod sizing.
 */
export class Estimation {
  /**
   * CPU usage statistics derived from historical Spark job metrics. Provides multiple estimates so users can choose between conservative and cost-saving risk profiles.
   */
  "cpu"?: Cpu;
  /**
   * Recommended ephemeral storage allocation (in MiB). Derived from job temporary storage patterns.
   */
  "ephemeralStorage"?: number;
  /**
   * Recommended JVM heap size (in MiB).
   */
  "heap"?: number;
  /**
   * Recommended total memory allocation (in MiB). Includes both heap and overhead.
   */
  "memory"?: number;
  /**
   * Recommended JVM overhead (in MiB). Computed as total memory - heap.
   */
  "overhead"?: number;
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
    cpu: {
      baseName: "cpu",
      type: "Cpu",
    },
    ephemeralStorage: {
      baseName: "ephemeral_storage",
      type: "number",
      format: "int64",
    },
    heap: {
      baseName: "heap",
      type: "number",
      format: "int64",
    },
    memory: {
      baseName: "memory",
      type: "number",
      format: "int64",
    },
    overhead: {
      baseName: "overhead",
      type: "number",
      format: "int64",
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
    return Estimation.attributeTypeMap;
  }

  public constructor() {}
}
