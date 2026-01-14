/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringCriticalAssetAttributes } from "./SecurityMonitoringCriticalAssetAttributes";
import { SecurityMonitoringCriticalAssetType } from "./SecurityMonitoringCriticalAssetType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The critical asset's properties.
 */
export class SecurityMonitoringCriticalAsset {
  /**
   * The attributes of the critical asset.
   */
  "attributes"?: SecurityMonitoringCriticalAssetAttributes;
  /**
   * The ID of the critical asset.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be `critical_assets`.
   */
  "type"?: SecurityMonitoringCriticalAssetType;

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
      type: "SecurityMonitoringCriticalAssetAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringCriticalAssetType",
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
    return SecurityMonitoringCriticalAsset.attributeTypeMap;
  }

  public constructor() {}
}
