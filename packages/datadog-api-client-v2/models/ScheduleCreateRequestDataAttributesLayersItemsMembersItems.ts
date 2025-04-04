/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser } from "./ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines a single member within a schedule layer, including the reference to the underlying user.
 */
export class ScheduleCreateRequestDataAttributesLayersItemsMembersItems {
  /**
   * Identifies the user participating in this layer as a single object with an `id`.
   */
  "user"?: ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser;

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
    user: {
      baseName: "user",
      type: "ScheduleCreateRequestDataAttributesLayersItemsMembersItemsUser",
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
    return ScheduleCreateRequestDataAttributesLayersItemsMembersItems.attributeTypeMap;
  }

  public constructor() {}
}
