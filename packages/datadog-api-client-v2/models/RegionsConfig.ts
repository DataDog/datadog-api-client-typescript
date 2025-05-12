/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `RegionsConfig` object.
 */
export class RegionsConfig {
  /**
   * The list of regions currently subscribed to .
   */
  "available"?: Array<string>;
  /**
   * The list of disabled regions.
   */
  "disabled"?: Array<string>;
  /**
   * The list of enabled regions.
   */
  "enabled"?: Array<string>;

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
    available: {
      baseName: "available",
      type: "Array<string>",
    },
    disabled: {
      baseName: "disabled",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "Array<string>",
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
    return RegionsConfig.attributeTypeMap;
  }

  public constructor() {}
}
