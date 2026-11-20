/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnomalyDetectionConfigDetectionSensitivity } from "./AnomalyDetectionConfigDetectionSensitivity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AnomalyDetectionConfig {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "detectionSensitivity": AnomalyDetectionConfigDetectionSensitivity;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    detectionSensitivity: {
      baseName: "detection_sensitivity",
      type: "AnomalyDetectionConfigDetectionSensitivity",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AnomalyDetectionConfig.attributeTypeMap;
  }

  public constructor() {}
}
