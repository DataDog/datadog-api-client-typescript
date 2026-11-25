/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeneratedMetricAttributesRelationship } from "./GeneratedMetricAttributesRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships for a generated metric.
 */
export class GeneratedMetricRelationships {
  /**
   * Relationship to the attributes of a generated metric.
   */
  "generatedMetricAttributes"?: GeneratedMetricAttributesRelationship;

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
    generatedMetricAttributes: {
      baseName: "generated_metric_attributes",
      type: "GeneratedMetricAttributesRelationship",
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
    return GeneratedMetricRelationships.attributeTypeMap;
  }

  public constructor() {}
}
