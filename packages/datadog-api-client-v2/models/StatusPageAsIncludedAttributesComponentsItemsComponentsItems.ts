/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPagesComponentGroupAttributesComponentsItemsStatus } from "./StatusPagesComponentGroupAttributesComponentsItemsStatus";
import { StatusPagesComponentGroupAttributesComponentsItemsType } from "./StatusPagesComponentGroupAttributesComponentsItemsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class StatusPageAsIncludedAttributesComponentsItemsComponentsItems {
  /**
   * The ID of the grouped component.
   */
  "id"?: string;
  /**
   * The name of the grouped component.
   */
  "name"?: string;
  /**
   * The zero-indexed position of the grouped component. Relative to the other components in the group.
   */
  "position"?: number;
  /**
   * The status of the component.
   */
  "status"?: StatusPagesComponentGroupAttributesComponentsItemsStatus;
  /**
   * The type of the component.
   */
  "type"?: StatusPagesComponentGroupAttributesComponentsItemsType;

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
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    position: {
      baseName: "position",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "StatusPagesComponentGroupAttributesComponentsItemsStatus",
    },
    type: {
      baseName: "type",
      type: "StatusPagesComponentGroupAttributesComponentsItemsType",
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
    return StatusPageAsIncludedAttributesComponentsItemsComponentsItems.attributeTypeMap;
  }

  public constructor() {}
}
