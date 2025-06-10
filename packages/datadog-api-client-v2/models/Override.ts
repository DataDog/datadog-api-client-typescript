/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OverrideAttributes } from "./OverrideAttributes";
import { OverrideRelationships } from "./OverrideRelationships";
import { OverrideType } from "./OverrideType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `Override` object.
 */
export class Override {
  /**
   * The definition of `OverrideAttributes` object.
   */
  "attributes"?: OverrideAttributes;
  /**
   * The ID of the override.
   */
  "id"?: string;
  /**
   * The definition of `OverrideRelationships` object.
   */
  "relationships"?: OverrideRelationships;
  /**
   * The definition of `OverrideType` object.
   */
  "type"?: OverrideType;

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
    attributes: {
      baseName: "attributes",
      type: "OverrideAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "OverrideRelationships",
    },
    type: {
      baseName: "type",
      type: "OverrideType",
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
    return Override.attributeTypeMap;
  }

  public constructor() {}
}
