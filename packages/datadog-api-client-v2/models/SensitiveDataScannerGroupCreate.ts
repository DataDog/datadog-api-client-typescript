/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerGroupAttributes } from "./SensitiveDataScannerGroupAttributes";
import { SensitiveDataScannerGroupRelationships } from "./SensitiveDataScannerGroupRelationships";
import { SensitiveDataScannerGroupType } from "./SensitiveDataScannerGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to the creation of a group.
 */
export class SensitiveDataScannerGroupCreate {
  /**
   * Attributes of the Sensitive Data Scanner group.
   */
  "attributes": SensitiveDataScannerGroupAttributes;
  /**
   * Relationships of the group.
   */
  "relationships"?: SensitiveDataScannerGroupRelationships;
  /**
   * Sensitive Data Scanner group type.
   */
  "type": SensitiveDataScannerGroupType;

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
      type: "SensitiveDataScannerGroupAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerGroupType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerGroupCreate.attributeTypeMap;
  }

  public constructor() {}
}
