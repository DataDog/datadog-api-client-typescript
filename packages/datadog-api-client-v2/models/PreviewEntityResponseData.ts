/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityResponseDataAttributes } from "./EntityResponseDataAttributes";
import { EntityResponseDataRelationships } from "./EntityResponseDataRelationships";
import { EntityResponseDataType } from "./EntityResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class PreviewEntityResponseData {
  "attributes"?: EntityResponseDataAttributes;
  "id"?: string;
  "relationships"?: EntityResponseDataRelationships;
  /**
   * Entity resource type.
   */
  "type": EntityResponseDataType;

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
      type: "EntityResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "EntityResponseDataRelationships",
    },
    type: {
      baseName: "type",
      type: "EntityResponseDataType",
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
    return PreviewEntityResponseData.attributeTypeMap;
  }

  public constructor() {}
}
