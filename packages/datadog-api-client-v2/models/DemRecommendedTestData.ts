/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemRecommendedTestAttributes } from "./DemRecommendedTestAttributes";
import { DemRecommendedTestType } from "./DemRecommendedTestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a recommended synthetic test.
 */
export class DemRecommendedTestData {
  /**
   * Attributes of an AI-recommended synthetic test for a DEM journey.
   */
  "attributes": DemRecommendedTestAttributes;
  /**
   * The identifier of the journey associated with the recommendation.
   */
  "id": string;
  /**
   * The type identifier for a recommended synthetic test.
   */
  "type": DemRecommendedTestType;

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
    attributes: {
      baseName: "attributes",
      type: "DemRecommendedTestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemRecommendedTestType",
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
    return DemRecommendedTestData.attributeTypeMap;
  }

  public constructor() {}
}
