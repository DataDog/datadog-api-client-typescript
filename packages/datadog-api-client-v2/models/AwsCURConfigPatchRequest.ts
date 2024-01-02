/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsCURConfigPatchData } from "./AwsCURConfigPatchData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS CUR config Patch Request.
 */
export class AwsCURConfigPatchRequest {
  /**
   * AWS CUR config Patch data.
   */
  "data": AwsCURConfigPatchData;

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
      type: "AwsCURConfigPatchData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsCURConfigPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}
