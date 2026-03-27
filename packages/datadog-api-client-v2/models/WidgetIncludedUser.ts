/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetIncludedUserAttributes } from "./WidgetIncludedUserAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A user resource included in the response.
 */
export class WidgetIncludedUser {
  /**
   * Attributes of an included user resource.
   */
  "attributes"?: WidgetIncludedUserAttributes;
  /**
   * The unique identifier of the user.
   */
  "id": string;
  /**
   * Users resource type.
   */
  "type": string;

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
      type: "WidgetIncludedUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return WidgetIncludedUser.attributeTypeMap;
  }

  public constructor() {}
}
