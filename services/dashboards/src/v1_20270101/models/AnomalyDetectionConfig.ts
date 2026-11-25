import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnomalyDetectionConfigDetectionSensitivity } from "./AnomalyDetectionConfigDetectionSensitivity";

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
