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
 * Response data related to the creation of a group.
 */
export class SensitiveDataScannerGroupResponse {
  /**
   * Attributes of the Sensitive Data Scanner group.
   */
  "attributes"?: SensitiveDataScannerGroupAttributes;
  /**
   * ID of the group.
   */
  "id"?: string;
  /**
   * Relationships of the group.
   */
  "relationships"?: SensitiveDataScannerGroupRelationships;
  /**
   * Sensitive Data Scanner group type.
   */
  "type"?: SensitiveDataScannerGroupType;

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
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerGroupType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerGroupResponse.attributeTypeMap;
  }

  public constructor() {}
}
