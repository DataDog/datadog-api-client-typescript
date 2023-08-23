/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerConfiguration } from "./SensitiveDataScannerConfiguration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Sensitive Data Scanner configuration data.
 */
export class SensitiveDataScannerConfigurationData {
  /**
   * A Sensitive Data Scanner configuration.
   */
  "data"?: SensitiveDataScannerConfiguration;

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
      type: "SensitiveDataScannerConfiguration",
    },
  };
}
