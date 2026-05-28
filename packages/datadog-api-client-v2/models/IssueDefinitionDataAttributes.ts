/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a single End User Device Monitoring issue definition.
 */
export class IssueDefinitionDataAttributes {
  /**
   * Category of the issue (for example, `battery`, `network`, or `performance`).
   */
  "category": string;
  /**
   * Human-readable label describing the issue, suitable for display in the Datadog UI.
   */
  "label": string;
  /**
   * Severity level of the issue (for example, `warning` or `critical`).
   */
  "level": string;

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
    category: {
      baseName: "category",
      type: "string",
      required: true,
    },
    label: {
      baseName: "label",
      type: "string",
      required: true,
    },
    level: {
      baseName: "level",
      type: "string",
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
    return IssueDefinitionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
