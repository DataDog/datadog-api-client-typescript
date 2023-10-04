/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackTemplateVariableContents } from "./PowerpackTemplateVariableContents";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack template variables.
 */
export class PowerpackTemplateVariables {
  /**
   * Template variables controlled at the powerpack level.
   */
  "controlledByPowerpack"?: Array<PowerpackTemplateVariableContents>;
  /**
   * Template variables controlled by the external resource, such as the dashboard this powerpack is on.
   */
  "controlledExternally"?: Array<PowerpackTemplateVariableContents>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    controlledByPowerpack: {
      baseName: "controlled_by_powerpack",
      type: "Array<PowerpackTemplateVariableContents>",
    },
    controlledExternally: {
      baseName: "controlled_externally",
      type: "Array<PowerpackTemplateVariableContents>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackTemplateVariables.attributeTypeMap;
  }

  public constructor() {}
}
