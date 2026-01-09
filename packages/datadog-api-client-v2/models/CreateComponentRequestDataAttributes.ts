/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateComponentRequestDataAttributesComponentsItems } from "./CreateComponentRequestDataAttributesComponentsItems";
import { CreateComponentRequestDataAttributesType } from "./CreateComponentRequestDataAttributesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class CreateComponentRequestDataAttributes {
  "components"?: Array<CreateComponentRequestDataAttributesComponentsItems>;
  "name": string;
  "position": number;
  "type": CreateComponentRequestDataAttributesType;

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
      type: "Array<CreateComponentRequestDataAttributesComponentsItems>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    position: {
      baseName: "position",
      type: "number",
      required: true,
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "CreateComponentRequestDataAttributesType",
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
    return CreateComponentRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
