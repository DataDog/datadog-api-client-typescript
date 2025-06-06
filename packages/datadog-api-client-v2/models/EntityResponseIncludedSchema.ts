/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityResponseIncludedSchemaAttributes } from "./EntityResponseIncludedSchemaAttributes";
import { EntityResponseIncludedSchemaType } from "./EntityResponseIncludedSchemaType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Included detail entity schema.
 */
export class EntityResponseIncludedSchema {
  /**
   * Included schema.
   */
  "attributes"?: EntityResponseIncludedSchemaAttributes;
  /**
   * Entity ID.
   */
  "id"?: string;
  /**
   * Schema type.
   */
  "type"?: EntityResponseIncludedSchemaType;

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
      type: "EntityResponseIncludedSchemaAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EntityResponseIncludedSchemaType",
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
    return EntityResponseIncludedSchema.attributeTypeMap;
  }

  public constructor() {}
}
