/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FrameworkControl } from "./FrameworkControl";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Framework Requirement.
 */
export class FrameworkRequirement {
  /**
   * Requirement Controls.
   */
  "controls": Array<FrameworkControl>;
  /**
   * Requirement Name.
   */
  "name": string;

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
    controls: {
      baseName: "controls",
      type: "Array<FrameworkControl>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return FrameworkRequirement.attributeTypeMap;
  }

  public constructor() {}
}
