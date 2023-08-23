/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerConfigurationType } from "./SensitiveDataScannerConfigurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Sensitive Data Scanner configuration.
 */
export class SensitiveDataScannerConfiguration {
  /**
   * ID of the configuration.
   */
  "id"?: string;
  /**
   * Sensitive Data Scanner configuration type.
   */
  "type"?: SensitiveDataScannerConfigurationType;

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
      type: "SensitiveDataScannerConfigurationType",
    },
  };
}
