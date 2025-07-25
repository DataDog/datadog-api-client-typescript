/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomConnectionAttributes } from "./CustomConnectionAttributes";
import { CustomConnectionType } from "./CustomConnectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A custom connection used by an app.
 */
export class CustomConnection {
  /**
   * The custom connection attributes.
   */
  "attributes"?: CustomConnectionAttributes;
  /**
   * The ID of the custom connection.
   */
  "id"?: string;
  /**
   * The custom connection type.
   */
  "type"?: CustomConnectionType;

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
      type: "CustomConnectionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "CustomConnectionType",
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
    return CustomConnection.attributeTypeMap;
  }

  public constructor() {}
}
