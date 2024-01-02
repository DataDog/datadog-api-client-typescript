/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsCURConfigPostRequestAttributes } from "./AwsCURConfigPostRequestAttributes";
import { AwsCURConfigPostRequestType } from "./AwsCURConfigPostRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS CUR config Post data.
 */
export class AwsCURConfigPostData {
  /**
   * Attributes for AWS CUR config Post Request.
   */
  "attributes": AwsCURConfigPostRequestAttributes;
  /**
   * Type of AWS CUR config Post Request.
   */
  "type": AwsCURConfigPostRequestType;

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
      type: "AwsCURConfigPostRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AwsCURConfigPostRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsCURConfigPostData.attributeTypeMap;
  }

  public constructor() {}
}
