/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerRuleAttributes } from "./SensitiveDataScannerRuleAttributes";
import { SensitiveDataScannerRuleRelationships } from "./SensitiveDataScannerRuleRelationships";
import { SensitiveDataScannerRuleType } from "./SensitiveDataScannerRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to the creation of a rule.
 */
export class SensitiveDataScannerRuleCreate {
  /**
   * Attributes of the Sensitive Data Scanner rule.
   */
  "attributes": SensitiveDataScannerRuleAttributes;
  /**
   * Relationships of a scanning rule.
   */
  "relationships": SensitiveDataScannerRuleRelationships;
  /**
   * Sensitive Data Scanner rule type.
   */
  "type": SensitiveDataScannerRuleType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SensitiveDataScannerRuleAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerRuleRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerRuleType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerRuleCreate.attributeTypeMap;
  }

  public constructor() {}
}
