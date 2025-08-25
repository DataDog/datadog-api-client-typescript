/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomFrameworkRequirement } from "./CustomFrameworkRequirement";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Full Framework Data Attributes.
 */
export class FullCustomFrameworkDataAttributes {
  /**
   * Framework Handle
   */
  "handle": string;
  /**
   * Framework Icon URL
   */
  "iconUrl"?: string;
  /**
   * Framework Name
   */
  "name": string;
  /**
   * Framework Requirements
   */
  "requirements": Array<CustomFrameworkRequirement>;
  /**
   * Framework Version
   */
  "version": string;

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
    handle: {
      baseName: "handle",
      type: "string",
      required: true,
    },
    iconUrl: {
      baseName: "icon_url",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    requirements: {
      baseName: "requirements",
      type: "Array<CustomFrameworkRequirement>",
      required: true,
    },
    version: {
      baseName: "version",
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
    return FullCustomFrameworkDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
