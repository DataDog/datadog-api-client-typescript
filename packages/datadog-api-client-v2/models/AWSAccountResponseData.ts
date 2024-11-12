/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAccountResponseAttributes } from "./AWSAccountResponseAttributes";
import { AWSAccountType } from "./AWSAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Account Response body
 */
export class AWSAccountResponseData {
  /**
   * The AWS Account Integration Config
   */
  "attributes"?: AWSAccountResponseAttributes;
  /**
   * Unique Datadog ID of the AWS Account Integration Config
   */
  "id": string;
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
      type: "AWSAccountResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return AWSAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
