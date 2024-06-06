/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAccountPatchAttributes } from "./AWSAccountPatchAttributes";
import { AWSAccountType } from "./AWSAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Account patch object
 */
export class AWSAccountPatch {
  /**
   * AWS Account attributes for patching
   */
  "attributes"?: AWSAccountPatchAttributes;
  /**
   * AWS Account ID
   */
  "id"?: string;
  /**
   * AWS Account type
   */
  "type"?: AWSAccountType;

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
      type: "AWSAccountPatchAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AWSAccountType",
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
    return AWSAccountPatch.attributeTypeMap;
  }

  public constructor() {}
}
