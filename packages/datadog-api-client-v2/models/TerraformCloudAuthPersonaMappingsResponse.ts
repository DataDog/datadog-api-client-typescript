/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TerraformCloudAuthPersonaMappingDataResponse } from "./TerraformCloudAuthPersonaMappingDataResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of HCP Terraform persona mappings.
 */
export class TerraformCloudAuthPersonaMappingsResponse {
  /**
   * Configured HCP Terraform persona mappings.
   */
  "data": Array<TerraformCloudAuthPersonaMappingDataResponse>;

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
    data: {
      baseName: "data",
      type: "Array<TerraformCloudAuthPersonaMappingDataResponse>",
      required: true,
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
    return TerraformCloudAuthPersonaMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
