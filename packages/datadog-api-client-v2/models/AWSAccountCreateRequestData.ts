/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAccountCreateRequestAttributes } from "./AWSAccountCreateRequestAttributes";
import { AWSAccountType } from "./AWSAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Account Create Request data
 */
export class AWSAccountCreateRequestData {
  /**
   * The AWS Account Integration Config to be created
   */
  "attributes": AWSAccountCreateRequestAttributes;
  /**
   * AWS Account resource type.
   */
  "type": AWSAccountType;

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
      type: "AWSAccountCreateRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSAccountType",
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
    return AWSAccountCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
