/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerStandardPatternType } from "./SensitiveDataScannerStandardPatternType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data containing the standard pattern id.
 */
export class SensitiveDataScannerStandardPattern {
  /**
   * ID of the standard pattern.
   */
  "id"?: string;
  /**
   * Sensitive Data Scanner standard pattern type.
   */
  "type"?: SensitiveDataScannerStandardPatternType;

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
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerStandardPatternType",
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
    return SensitiveDataScannerStandardPattern.attributeTypeMap;
  }

  public constructor() {}
}
