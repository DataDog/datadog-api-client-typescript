/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TerraformCloudAuthPersonaMappingCreateAttributes } from "./TerraformCloudAuthPersonaMappingCreateAttributes";
import { TerraformCloudAuthPersonaMappingType } from "./TerraformCloudAuthPersonaMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an HCP Terraform persona mapping.
 */
export class TerraformCloudAuthPersonaMappingCreateData {
  /**
   * Attributes for creating an HCP Terraform persona mapping.
   */
  "attributes": TerraformCloudAuthPersonaMappingCreateAttributes;
  /**
   * Type identifier for an HCP Terraform persona mapping.
   */
  "type": TerraformCloudAuthPersonaMappingType;

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
      type: "TerraformCloudAuthPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TerraformCloudAuthPersonaMappingType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TerraformCloudAuthPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
