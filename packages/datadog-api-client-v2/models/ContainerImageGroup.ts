/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImageGroupAttributes } from "./ContainerImageGroupAttributes";
import { ContainerImageGroupRelationships } from "./ContainerImageGroupRelationships";
import { ContainerImageGroupType } from "./ContainerImageGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Container Image Group object.
 */
export class ContainerImageGroup {
  /**
   * Attributes for a Container Image Group.
   */
  "attributes"?: ContainerImageGroupAttributes;
  /**
   * Container Image Group ID.
   */
  "id"?: string;
  /**
   * Relationships inside a Container Image Group.
   */
  "relationships"?: ContainerImageGroupRelationships;
  /**
   * Type of Container Image Group.
   */
  "type"?: ContainerImageGroupType;

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
      type: "ContainerImageGroupAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "ContainerImageGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "ContainerImageGroupType",
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
    return ContainerImageGroup.attributeTypeMap;
  }

  public constructor() {}
}
