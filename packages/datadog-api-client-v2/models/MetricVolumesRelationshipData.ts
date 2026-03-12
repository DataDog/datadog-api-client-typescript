/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricIngestedIndexedVolumeType } from "./MetricIngestedIndexedVolumeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship data for a metric's ingested and indexed volumes.
 */
export class MetricVolumesRelationshipData {
  /**
   * The metric name for this resource.
   */
  "id": string;
  /**
   * The metric ingested and indexed volume type.
   */
  "type": MetricIngestedIndexedVolumeType;

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
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricIngestedIndexedVolumeType",
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
    return MetricVolumesRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
