/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSCloudAuthPersonaMappingCreateAttributes } from "./AWSCloudAuthPersonaMappingCreateAttributes";
import { AWSCloudAuthPersonaMappingType } from "./AWSCloudAuthPersonaMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an AWS cloud authentication persona mapping
 */
export class AWSCloudAuthPersonaMappingCreateData {
  /**
   * Attributes for creating an AWS cloud authentication persona mapping
   */
  "attributes": AWSCloudAuthPersonaMappingCreateAttributes;
  /**
   * Type identifier for AWS cloud authentication persona mapping
   */
  "type": AWSCloudAuthPersonaMappingType;

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
      type: "AWSCloudAuthPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSCloudAuthPersonaMappingType",
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
    return AWSCloudAuthPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
