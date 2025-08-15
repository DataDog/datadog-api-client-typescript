/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackGroupWidget } from "./PowerpackGroupWidget";
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
   * Powerpack group widget definition object.
   */
  "groupWidget": PowerpackGroupWidget;
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
    description: {
      baseName: "description",
      type: "string",
    },
    groupWidget: {
      baseName: "group_widget",
      type: "PowerpackGroupWidget",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
