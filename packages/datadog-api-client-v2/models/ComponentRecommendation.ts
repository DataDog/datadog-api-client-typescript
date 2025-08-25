/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Estimation } from "./Estimation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "any",
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
