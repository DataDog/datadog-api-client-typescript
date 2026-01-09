/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateComponentRequestDataAttributesType } from "./CreateComponentRequestDataAttributesType";
import { CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems } from "./CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems";
import { StatusPagesComponentGroupAttributesComponentsItemsStatus } from "./StatusPagesComponentGroupAttributesComponentsItemsStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class CreateStatusPageRequestDataAttributesComponentsItems {
  "components"?: Array<CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems>;
  "id"?: string;
  "name"?: string;
  "position"?: number;
  "status"?: StatusPagesComponentGroupAttributesComponentsItemsStatus;
  "type"?: CreateComponentRequestDataAttributesType;

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
    components: {
      baseName: "components",
      type: "Array<CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems>",
    },
    id: {
      baseName: "id",
      type: "string",
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
      type: "CreateComponentRequestDataAttributesType",
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
    return CreateStatusPageRequestDataAttributesComponentsItems.attributeTypeMap;
  }

  public constructor() {}
}
