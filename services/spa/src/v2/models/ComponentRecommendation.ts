import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Estimation } from "./Estimation";

/**
 * Resource recommendation for a single Spark component (driver or executor). Contains estimation data used to patch Spark job specs.
 */
export class ComponentRecommendation {
  /**
   * Recommended resource values for a Spark driver or executor, derived from recent real usage metrics. Used by SPA to propose more efficient pod sizing.
   */
  "estimation": Estimation;
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
    estimation: {
      baseName: "estimation",
      type: "Estimation",
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
    return ComponentRecommendation.attributeTypeMap;
  }

  public constructor() {}
}
