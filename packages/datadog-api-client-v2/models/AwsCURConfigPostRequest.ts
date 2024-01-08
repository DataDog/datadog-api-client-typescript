/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsCURConfigPostData } from "./AwsCURConfigPostData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS CUR config Post Request.
 */
export class AwsCURConfigPostRequest {
  /**
   * AWS CUR config Post data.
   */
  "data": AwsCURConfigPostData;

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
      type: "AwsCURConfigPostData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsCURConfigPostRequest.attributeTypeMap;
  }

  public constructor() {}
}