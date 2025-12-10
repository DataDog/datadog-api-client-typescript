import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOCountCondition } from "./SLOCountCondition";

/**
 * A metric SLI specification.
 */
export class SLOCountSpec {
  /**
   * A metric SLI specification, composed of three parts: the good events formula, the total events formula,
   * and the involved queries.
   */
  "count": SLOCountCondition;
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
      type: "SLOCountCondition",
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
