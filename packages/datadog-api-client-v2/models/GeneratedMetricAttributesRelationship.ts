/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeneratedMetricAttributesRelationshipData } from "./GeneratedMetricAttributesRelationshipData";
import { GeneratedMetricAttributesRelationshipLinks } from "./GeneratedMetricAttributesRelationshipLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to the attributes of a generated metric.
 */
export class GeneratedMetricAttributesRelationship {
  /**
   * Relationship data for the attributes of a generated metric.
   */
  "data"?: GeneratedMetricAttributesRelationshipData;
  /**
   * Links for the generated metric attributes relationship.
   */
  "links"?: GeneratedMetricAttributesRelationshipLinks;

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
    data: {
      baseName: "data",
      type: "GeneratedMetricAttributesRelationshipData",
    },
    links: {
      baseName: "links",
      type: "GeneratedMetricAttributesRelationshipLinks",
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
    return GeneratedMetricAttributesRelationship.attributeTypeMap;
  }

  public constructor() {}
}
