/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack template variables.
 */
export class PowerpackTemplateVariable {
  /**
   * One or many template variable default values within the saved view, which are unioned together using `OR` if more than one is specified.
   */
  "defaults"?: Array<string>;
  /**
   * The name of the variable.
   */
  "name": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    defaults: {
      baseName: "defaults",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackTemplateVariable.attributeTypeMap;
  }

  public constructor() {}
}
