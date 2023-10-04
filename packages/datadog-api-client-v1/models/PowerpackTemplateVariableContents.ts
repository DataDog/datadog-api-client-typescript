/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack template variable contents.
 */
export class PowerpackTemplateVariableContents {
  /**
   * The name of the variable.
   */
  "name": string;
  /**
   * The tag prefix associated with the variable.
   */
  "prefix"?: string;
  /**
   * One or many template variable values within the saved view, which will be unioned together using `OR` if more than one is specified.
   */
  "values": Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    prefix: {
      baseName: "prefix",
      type: "string",
    },
    values: {
      baseName: "values",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackTemplateVariableContents.attributeTypeMap;
  }

  public constructor() {}
}
