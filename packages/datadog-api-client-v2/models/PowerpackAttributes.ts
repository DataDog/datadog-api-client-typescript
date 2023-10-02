/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackTemplateVariable } from "./PowerpackTemplateVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack attribute object.
 */
export class PowerpackAttributes {
  /**
   * Description of this powerpack.
   */
  "description"?: string;
  /**
   * Templated group of dashboard widgets for the powerpack.
   */
  "groupWidget": { [key: string]: any };
  /**
   * Name of the powerpack.
   */
  "name": string;
  /**
   * List of tags to identify this powerpack.
   */
  "tags"?: Array<string>;
  /**
   * List of template variables for this powerpack.
   */
  "templateVariables"?: Array<PowerpackTemplateVariable>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    groupWidget: {
      baseName: "group_widget",
      type: "{ [key: string]: any; }",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "Array<PowerpackTemplateVariable>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackAttributes.attributeTypeMap;
  }

  public constructor() {}
}
