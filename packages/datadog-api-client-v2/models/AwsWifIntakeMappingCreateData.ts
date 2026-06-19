/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsWifIntakeMappingAttributes } from "./AwsWifIntakeMappingAttributes";
import { AwsWifIntakeMappingType } from "./AwsWifIntakeMappingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an AWS WIF intake mapping.
 */
export class AwsWifIntakeMappingCreateData {
  /**
   * Attributes of an AWS WIF intake mapping.
   */
  "attributes": AwsWifIntakeMappingAttributes;
  /**
   * Type identifier for an AWS WIF intake mapping.
   */
  "type": AwsWifIntakeMappingType;

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
      type: "AwsWifIntakeMappingAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsWifIntakeMappingType",
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
    return AwsWifIntakeMappingCreateData.attributeTypeMap;
  }

  public constructor() {}
}
