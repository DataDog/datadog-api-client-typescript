/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InterfaceAttributes } from "./InterfaceAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The interfaces list data
 */
export class GetInterfacesData {
  /**
   * The interface attributes
   */
  "attributes"?: InterfaceAttributes;
  /**
   * The interface ID
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be interface.
   */
  "type"?: string;

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
      type: "InterfaceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return GetInterfacesData.attributeTypeMap;
  }

  public constructor() {}
}