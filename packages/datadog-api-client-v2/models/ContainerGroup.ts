/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerGroupAttributes } from "./ContainerGroupAttributes";
import { ContainerGroupRelationships } from "./ContainerGroupRelationships";
import { ContainerGroupType } from "./ContainerGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Container group object.
 */
export class ContainerGroup {
  /**
   * Attributes for a container group.
   */
  "attributes"?: ContainerGroupAttributes;
  /**
   * Container Group ID.
   */
  "id"?: string;
  /**
   * Relationships to containers inside a container group.
   */
  "relationships"?: ContainerGroupRelationships;
  /**
   * Type of container group.
   */
  "type"?: ContainerGroupType;

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
      type: "ContainerGroupAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ContainerGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "ContainerGroupType",
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
    return ContainerGroup.attributeTypeMap;
  }

  public constructor() {}
}
