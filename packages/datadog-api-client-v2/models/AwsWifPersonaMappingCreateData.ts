/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsWifPersonaMappingCreateAttributes } from "./AwsWifPersonaMappingCreateAttributes";
import { AwsWifPersonaMappingType } from "./AwsWifPersonaMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an AWS WIF persona mapping.
 */
export class AwsWifPersonaMappingCreateData {
  /**
   * Attributes for creating an AWS WIF persona mapping.
   */
  "attributes": AwsWifPersonaMappingCreateAttributes;
  /**
   * Type identifier for an AWS WIF persona mapping.
   */
  "type": AwsWifPersonaMappingType;

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
      type: "AwsWifPersonaMappingCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsWifPersonaMappingType",
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
    return AwsWifPersonaMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
