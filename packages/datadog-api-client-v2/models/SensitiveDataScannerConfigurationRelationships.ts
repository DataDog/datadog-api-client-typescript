/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerGroupList } from "./SensitiveDataScannerGroupList";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of the configuration.
 */
export class SensitiveDataScannerConfigurationRelationships {
  /**
   * List of groups, ordered.
   */
  "groups"?: SensitiveDataScannerGroupList;

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
    groups: {
      baseName: "groups",
      type: "SensitiveDataScannerGroupList",
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
    return SensitiveDataScannerConfigurationRelationships.attributeTypeMap;
  }

  public constructor() {}
}
