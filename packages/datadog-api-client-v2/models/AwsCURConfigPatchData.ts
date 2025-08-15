/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsCURConfigPatchRequestAttributes } from "./AwsCURConfigPatchRequestAttributes";
import { AwsCURConfigPatchRequestType } from "./AwsCURConfigPatchRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS CUR config Patch data.
 */
export class AwsCURConfigPatchData {
  /**
   * Attributes for AWS CUR config Patch Request.
   */
  "attributes": AwsCURConfigPatchRequestAttributes;
  /**
   * Type of AWS CUR config Patch Request.
   */
  "type": AwsCURConfigPatchRequestType;

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
      type: "AwsCURConfigPatchRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsCURConfigPatchRequestType",
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
    return AwsCURConfigPatchData.attributeTypeMap;
  }

  public constructor() {}
}
