/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateComponentRequestDataAttributes } from "./CreateComponentRequestDataAttributes";
import { CreateComponentRequestDataRelationships } from "./CreateComponentRequestDataRelationships";
import { StatusPagesComponentGroupType } from "./StatusPagesComponentGroupType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class CreateComponentRequestData {
  /**
   * The supported attributes for creating a component.
   */
  "attributes": CreateComponentRequestDataAttributes;
  /**
   * The supported relationships for creating a component.
   */
  "relationships"?: CreateComponentRequestDataRelationships;
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
      type: "CreateComponentRequestDataAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CreateComponentRequestDataRelationships",
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
    return CreateComponentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
