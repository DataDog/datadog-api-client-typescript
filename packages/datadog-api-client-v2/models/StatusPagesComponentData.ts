/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPagesComponentDataAttributes } from "./StatusPagesComponentDataAttributes";
import { StatusPagesComponentDataRelationships } from "./StatusPagesComponentDataRelationships";
import { StatusPagesComponentGroupType } from "./StatusPagesComponentGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class StatusPagesComponentData {
  /**
   * The attributes of a component.
   */
  "attributes"?: StatusPagesComponentDataAttributes;
  /**
   * The ID of the component.
   */
  "id"?: string;
  /**
   * The relationships of a component.
   */
  "relationships"?: StatusPagesComponentDataRelationships;
  /**
   * Components resource type.
   */
  "type": StatusPagesComponentGroupType;

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
      type: "StatusPagesComponentDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "StatusPagesComponentDataRelationships",
    },
    type: {
      baseName: "type",
      type: "StatusPagesComponentGroupType",
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
    return StatusPagesComponentData.attributeTypeMap;
  }

  public constructor() {}
}
