import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOCountDefinition } from "./SLOCountDefinition";

/**
 * A metric SLI specification.
 */
export class SLOCountSpec {
  /**
   * A count-based (metric) SLI specification, composed of three parts: the good events formula, the total events formula,
   * and the underlying queries.
   */
  "count": SLOCountDefinition;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      baseName: "count",
      type: "SLOCountDefinition",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCountSpec.attributeTypeMap;
  }

  public constructor() {}
}
