/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipConfidenceLevel } from "./OwnershipConfidenceLevel";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of an ownership settings request.
 */
export class OwnershipSettingsRequestAttributes {
  /**
   * Whether automatic ownership tagging is enabled.
   */
  "autoTag": boolean;
  /**
   * The ownership confidence level.
   */
  "confidenceLevel": OwnershipConfidenceLevel;

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
    autoTag: {
      baseName: "auto_tag",
      type: "boolean",
      required: true,
    },
    confidenceLevel: {
      baseName: "confidence_level",
      type: "OwnershipConfidenceLevel",
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
    return OwnershipSettingsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
