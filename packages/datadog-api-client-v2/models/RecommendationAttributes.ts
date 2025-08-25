/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComponentRecommendation } from "./ComponentRecommendation";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of the SPA Recommendation resource. Contains recommendations for both driver and executor components.
*/
export class RecommendationAttributes {
  /**
   * Resource recommendation for a single Spark component (driver or executor). Contains estimation data used to patch Spark job specs.
  */
  "driver": ComponentRecommendation;
  /**
   * Resource recommendation for a single Spark component (driver or executor). Contains estimation data used to patch Spark job specs.
  */
  "executor": ComponentRecommendation;

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
    "driver": {
      "baseName": "driver",
      "type": "ComponentRecommendation",
      "required": true,
    },
    "executor": {
      "baseName": "executor",
      "type": "ComponentRecommendation",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return RecommendationAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









