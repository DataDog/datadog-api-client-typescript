/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppDefinitionType } from "./AppDefinitionType";
import { CreateAppRequestDataAttributes } from "./CreateAppRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object containing the app definition.
 */
export class CreateAppRequestData {
  /**
   * App definition attributes such as name, description, and components.
   */
  "attributes"?: CreateAppRequestDataAttributes;
  /**
   * The app definition type.
   */
  "type": AppDefinitionType;

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
      type: "CreateAppRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "AppDefinitionType",
      required: true,
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
    return CreateAppRequestData.attributeTypeMap;
  }

  public constructor() {}
}
