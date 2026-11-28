/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FreeTextBackendDefinitionTextAlign } from "./FreeTextBackendDefinitionTextAlign";
import { FreeTextBackendDefinitionType } from "./FreeTextBackendDefinitionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FreeTextBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "color"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fontSize"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "text": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textAlign"?: FreeTextBackendDefinitionTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": FreeTextBackendDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    color: {
      baseName: "color",
      type: "string",
    },
    fontSize: {
      baseName: "font_size",
      type: "string",
    },
    text: {
      baseName: "text",
      type: "string",
      required: true,
    },
    textAlign: {
      baseName: "text_align",
      type: "FreeTextBackendDefinitionTextAlign",
    },
    type: {
      baseName: "type",
      type: "FreeTextBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FreeTextBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
