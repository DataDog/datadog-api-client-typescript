/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionConnectionIntegration } from "./ActionConnectionIntegration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ActionConnectionAttributes` object.
 */
export class ActionConnectionAttributes {
  /**
   * The definition of `ActionConnectionIntegration` object.
   */
  "integration": ActionConnectionIntegration;
  /**
   * Name of the connection.
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
    integration: {
      baseName: "integration",
      type: "ActionConnectionIntegration",
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
    return ActionConnectionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
