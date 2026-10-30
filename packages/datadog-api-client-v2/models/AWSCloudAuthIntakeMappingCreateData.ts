/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSCloudAuthIntakeMappingCreateAttributes } from "./AWSCloudAuthIntakeMappingCreateAttributes";
import { AWSCloudAuthIntakeMappingType } from "./AWSCloudAuthIntakeMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an AWS cloud authentication intake mapping.
 */
export class AWSCloudAuthIntakeMappingCreateData {
  /**
   * Attributes for creating an AWS cloud authentication intake mapping.
   */
  "attributes": AWSCloudAuthIntakeMappingCreateAttributes;
  /**
   * Type identifier for AWS cloud authentication intake mapping.
   */
  "type": AWSCloudAuthIntakeMappingType;

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
      type: "AWSCloudAuthIntakeMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSCloudAuthIntakeMappingType",
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
    return AWSCloudAuthIntakeMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
