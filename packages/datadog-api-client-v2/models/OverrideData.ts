/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OverrideAttributes } from "./OverrideAttributes";
import { OverrideDataType } from "./OverrideDataType";
import { OverrideRelationships } from "./OverrideRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for an on-call schedule override.
 */
export class OverrideData {
  /**
   * Attributes for an on-call schedule override.
   */
  "attributes"?: OverrideAttributes;
  /**
   * The unique identifier of the override.
   */
  "id": string;
  /**
   * Relationships for an on-call schedule override.
   */
  "relationships"?: OverrideRelationships;
  /**
   * Indicates that the resource is of type 'overrides'.
   */
  "type": OverrideDataType;

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
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "OverrideRelationships",
    },
    type: {
      baseName: "type",
      type: "OverrideDataType",
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
    return OverrideData.attributeTypeMap;
  }

  public constructor() {}
}
