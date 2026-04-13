/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupAttributes } from "./OrgGroupAttributes";
import { OrgGroupRelationships } from "./OrgGroupRelationships";
import { OrgGroupType } from "./OrgGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An org group resource.
 */
export class OrgGroupData {
  /**
   * Attributes of an org group.
   */
  "attributes": OrgGroupAttributes;
  /**
   * The ID of the org group.
   */
  "id": string;
  /**
   * Relationships of an org group.
   */
  "relationships"?: OrgGroupRelationships;
  /**
   * Org groups resource type.
   */
  "type": OrgGroupType;

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
      type: "OrgGroupAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupRelationships",
    },
    type: {
      baseName: "type",
      type: "OrgGroupType",
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
    return OrgGroupData.attributeTypeMap;
  }

  public constructor() {}
}
