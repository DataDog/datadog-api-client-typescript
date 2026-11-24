/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeneratedMetricAttributesType } from "./GeneratedMetricAttributesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship data for the attributes of a generated metric.
 */
export class GeneratedMetricAttributesRelationshipData {
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The generated metric attributes resource type.
   */
  "type"?: GeneratedMetricAttributesType;

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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GeneratedMetricAttributesType",
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
    return GeneratedMetricAttributesRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
