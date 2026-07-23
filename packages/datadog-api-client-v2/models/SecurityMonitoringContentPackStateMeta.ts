/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSKU } from "./SecurityMonitoringSKU";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for content pack states.
 */
export class SecurityMonitoringContentPackStateMeta {
  /**
   * Whether the Cloud SIEM index configuration is incorrect for the organization.
   */
  "cloudSiemIndexIncorrect": boolean;
  /**
   * The number of months that standard logs are retained for organizations on the standalone_indexed` pricing model. This field is omitted for other pricing models.
   */
  "retentionMonths"?: number;
  /**
   * The Cloud SIEM pricing model (SKU) for the organization.
   */
  "sku": SecurityMonitoringSKU;

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
    cloudSiemIndexIncorrect: {
      baseName: "cloud_siem_index_incorrect",
      type: "boolean",
      required: true,
    },
    retentionMonths: {
      baseName: "retention_months",
      type: "number",
      format: "int32",
    },
    sku: {
      baseName: "sku",
      type: "SecurityMonitoringSKU",
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
    return SecurityMonitoringContentPackStateMeta.attributeTypeMap;
  }

  public constructor() {}
}
