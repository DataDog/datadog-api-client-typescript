/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerConfigurationRelationships } from "./SensitiveDataScannerConfigurationRelationships";
import { SensitiveDataScannerConfigurationType } from "./SensitiveDataScannerConfigurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to the reordering of scanning groups.
 */
export class SensitiveDataScannerReorderConfig {
  /**
   * ID of the configuration.
   */
  "id"?: string;
  /**
   * Relationships of the configuration.
   */
  "relationships"?: SensitiveDataScannerConfigurationRelationships;
  /**
   * Sensitive Data Scanner configuration type.
   */
  "type"?: SensitiveDataScannerConfigurationType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerConfigurationRelationships",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerConfigurationType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerReorderConfig.attributeTypeMap;
  }

  public constructor() {}
}
