/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AwsCURConfigAttributes } from "./AwsCURConfigAttributes";
import { AwsCURConfigType } from "./AwsCURConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS CUR config.
 */
export class AwsCURConfig {
  /**
   * Attributes for An AWS CUR config.
   */
  "attributes": AwsCURConfigAttributes;
  /**
   * The ID of the AWS CUR config.
   */
  "id"?: number;
  /**
   * Type of AWS CUR config.
   */
  "type": AwsCURConfigType;

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
      type: "AwsCURConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "AwsCURConfigType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AwsCURConfig.attributeTypeMap;
  }

  public constructor() {}
}
