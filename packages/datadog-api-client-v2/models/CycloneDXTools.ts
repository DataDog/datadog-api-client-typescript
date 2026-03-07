/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CycloneDXToolComponent } from "./CycloneDXToolComponent";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Tools used to generate the BOM.
 */
export class CycloneDXTools {
  /**
   * List of tool components. Only one tool is supported.
   */
  "components": [CycloneDXToolComponent];

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
    components: {
      baseName: "components",
      type: "[CycloneDXToolComponent]",
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
    return CycloneDXTools.attributeTypeMap;
  }

  public constructor() {}
}
