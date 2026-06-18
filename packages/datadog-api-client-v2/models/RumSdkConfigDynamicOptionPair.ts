/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumSdkConfigDynamicOption } from "./RumSdkConfigDynamicOption";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A key-value pair where the value is a dynamic configuration option.
 */
export class RumSdkConfigDynamicOptionPair {
  /**
   * The key name for this dynamic configuration pair.
   */
  "key": string;
  /**
   * A dynamic configuration option that extracts a value at runtime using a specified strategy.
   */
  "value": RumSdkConfigDynamicOption;

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
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "RumSdkConfigDynamicOption",
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
    return RumSdkConfigDynamicOptionPair.attributeTypeMap;
  }

  public constructor() {}
}
