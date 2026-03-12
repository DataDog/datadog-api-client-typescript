/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricVolumesRelationshipData } from "./MetricVolumesRelationshipData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to a metric's ingested and indexed volumes.
 */
export class MetricVolumesRelationship {
  /**
   * Relationship data for a metric's ingested and indexed volumes.
   */
  "data"?: MetricVolumesRelationshipData;

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
      type: "MetricVolumesRelationshipData",
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
    return MetricVolumesRelationship.attributeTypeMap;
  }

  public constructor() {}
}
