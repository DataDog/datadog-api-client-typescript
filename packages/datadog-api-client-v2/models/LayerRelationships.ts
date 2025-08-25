/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LayerRelationshipsMembers } from "./LayerRelationshipsMembers";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Holds references to objects related to the Layer entity, such as its members.
 */
export class LayerRelationships {
  /**
   * Holds an array of references to the members of a Layer, each containing member IDs.
   */
  "members"?: LayerRelationshipsMembers;

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
    members: {
      baseName: "members",
      type: "LayerRelationshipsMembers",
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
    return LayerRelationships.attributeTypeMap;
  }

  public constructor() {}
}
