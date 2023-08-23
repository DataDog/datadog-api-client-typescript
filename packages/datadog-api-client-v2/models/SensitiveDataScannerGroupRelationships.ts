/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerConfigurationData } from "./SensitiveDataScannerConfigurationData";
import { SensitiveDataScannerRuleData } from "./SensitiveDataScannerRuleData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of the group.
 */
export class SensitiveDataScannerGroupRelationships {
  /**
   * A Sensitive Data Scanner configuration data.
   */
  "configuration"?: SensitiveDataScannerConfigurationData;
  /**
   * Rules included in the group.
   */
  "rules"?: SensitiveDataScannerRuleData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    configuration: {
      type: "SensitiveDataScannerConfigurationData",
    },
    rules: {
      type: "SensitiveDataScannerRuleData",
    },
  };
}
