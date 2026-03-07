/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CycloneDXAssetComponent } from "./CycloneDXAssetComponent";
import { CycloneDXTools } from "./CycloneDXTools";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for the CycloneDX BOM.
 */
export class CycloneDXMetadata {
  /**
   * The asset component represents the system or host being scanned.
   */
  "component": CycloneDXAssetComponent;
  /**
   * Tools used to generate the BOM.
   */
  "tools": CycloneDXTools;

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
    component: {
      baseName: "component",
      type: "CycloneDXAssetComponent",
      required: true,
    },
    tools: {
      baseName: "tools",
      type: "CycloneDXTools",
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
    return CycloneDXMetadata.attributeTypeMap;
  }

  public constructor() {}
}
